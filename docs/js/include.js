/* include.js ──────────────────────────────────────────────────────────────
   Inserta header + footer y luego carga main.js y accessibility.js.
   ▸ Detecta correctamente la raíz del proyecto:
       • Si se sirve desde GitHub Pages  → "/<repo>/"
       • Si se sirve en localhost/Apache → "/"
   ▸ Funciona desde cualquier sub-carpeta (p. ej. /patrones/).
──────────────────────────────────────────────────────────────────────────*/
(async () => {
  /* ── 1. Calcular repoRoot ──────────────────────────────────────────── */
  const repoRoot = (() => {
    // Ej. location.hostname = "usuario.github.io"  → true
    const onGH = location.hostname.endsWith("github.io");
    if (onGH) {
      // pathname = "/DevPattern/patrones/creacionales.html"
      const repo = location.pathname.split("/").filter(Boolean)[0]; // "DevPattern"
      return repo ? `/${repo}/` : "/";
    }
    // Servidor local: raíz directa
    return "/";
  })();

  /* ── 2. Función para insertar fragmentos -------------------------------- */
  const insert = async (selector, url) => {
    try {
      const res = await fetch(repoRoot + url);
      if (!res.ok) throw new Error(res.statusText);

      const html   = await res.text();
      const target = document.querySelector(selector);
      target.innerHTML = html;

      /* Normalizar rutas internas dentro del fragmento -- href & src -- */
      target.querySelectorAll("a[href], img[src], link[href]").forEach(el => {
        const attr = el.tagName === "IMG" ? "src" : "href";
        const val  = el.getAttribute(attr);

        if (
          !val ||
          /^(https?:)?\/\//.test(val) ||  // absolutas / externas
          val.startsWith("#")           ||
          val.startsWith("mailto:")     ||
          val.startsWith("tel:")
        ) return;

        el.setAttribute(attr, repoRoot + val.replace(/^\.\//, ""));
      });
    } catch (e) {
      console.error(`No se pudo cargar ${url}`, e);
    }
  };

  /* ── 3. Inyectar header y footer en paralelo ────────────────────────── */
  await Promise.all([
    insert("#site-header", "partials/header.html"),
    insert("#site-footer", "partials/footer.html")
  ]);

  /* ── 4. Cargar scripts dependientes una vez insertados ─────────────── */
  const load = src =>
    new Promise(r => {
      const s = document.createElement("script");
      s.src   = repoRoot + src;
      s.defer = true;
      s.onload = r;
      document.body.appendChild(s);
    });

  await load("js/main.js");
  await load("js/accessibility.js");
})();
