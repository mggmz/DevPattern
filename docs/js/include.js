/*  include.js
    Inserta header + footer parciales y, tras eso,
    carga main.js y accessibility.js para que encuentren el DOM.
--------------------------------------------------------------- */
(async () => {
  const insert = async (selector, url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      document.querySelector(selector).innerHTML = await res.text();
    } catch (e) {
      console.error(`No se pudo cargar ${url}`, e);
    }
  };

  // placeholder divs ya están en cada HTML
  await Promise.all([
    insert("#site-header", "./partials/header.html"),
    insert("#site-footer", "./partials/footer.html")
  ]);

  //  después de inyectar, carga scripts dependientes
  const load = src => new Promise(r => {
    const s = document.createElement("script");
    s.src = src; s.defer = true; s.onload = r;
    document.body.appendChild(s);
  });

  await load("js/main.js");
  await load("js/accessibility.js");
})();