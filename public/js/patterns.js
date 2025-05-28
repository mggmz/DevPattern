/* global PATTERNS */
/**
 * Pinta todas las tarjetas de patrones del tipo solicitado
 * @param {"creacional"|"estructural"|"comportamiento"} category
 */
function renderPatterns(category) {
  const container = document.getElementById("patterns");
  if (!container || !PATTERNS) return;

  // Filtra por categoría y orden alfabético
  const items = PATTERNS
    .filter(p => p.category === category)
    .sort((a, b) => a.name.localeCompare(b.name));

  items.forEach(p => container.appendChild(cardFromPattern(p)));

  // Inicializa highlight.js (CDN ya cargado en la página)
  hljs.highlightAll();
}

/* --------------------------------------------------------------------- */

function cardFromPattern(p) {
  const art = document.createElement("article");
  art.className = "space-y-4";

  /* título + breve desc ------------------------------------------------ */
  art.innerHTML = `
    <h2 class="text-2xl font-bold">${p.name}</h2>
    <p class="text-gray-700">${p.summary}</p>
  `;

  /* imagen opcional ---------------------------------------------------- */
  if (p.image) {
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = `Ilustración de ${p.name}`;
    img.className = "my-4 w-full rounded-lg shadow-lg";
    art.appendChild(img);
  }

  /* selector lenguajes ------------------------------------------------- */
  const selector = document.createElement("div");
  selector.className = "mb-2 flex gap-2";
  ["java", "js"].forEach(lang => {
    const btn = document.createElement("button");
    btn.textContent = lang === "java" ? "Java" : "JavaScript";
    btn.dataset.lang = lang;
    btn.className =
      "toggle-lang rounded-md border border-gray-400 px-2 py-1 text-xs font-semibold transition";
    selector.appendChild(btn);
  });
  art.appendChild(selector);

  /* cajitas de código -------------------------------------------------- */
  const codeBox = document.createElement("div");
  codeBox.className =
    "relative rounded-xl bg-gray-900/90 p-4 text-sm leading-relaxed text-gray-100";

  ["java", "js"].forEach(lang => {
    const pre = document.createElement("pre");
    pre.className = lang === "js" ? "language-javascript" : "language-java";
    pre.dataset.lang = lang;
    pre.innerHTML = `<code>${escapeHtml(p.examples[lang])}</code>`;
    codeBox.appendChild(pre);
  });
  art.appendChild(codeBox);

  /* comportamiento del selector --------------------------------------- */
  selector.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      // Toggle estilos botón
      selector.querySelectorAll("button").forEach(b =>
        b.classList.toggle("bg-pastel-red text-white", b === btn)
      );
      // Muestra/oculta bloques
      codeBox.querySelectorAll("pre").forEach(pre =>
        pre.style.display = pre.dataset.lang === lang ? "block" : "none"
      );
    });
  });
  // Activa JS por defecto
  selector.querySelector('[data-lang="js"]').click();
  return art;
}

/* --------------------------------------------------------------------- */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
