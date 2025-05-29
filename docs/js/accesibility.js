/* Config ---------------------------------------------------------------- */
const MAX_SCALE = 3;
const MIN_SCALE = 1;
let scaleStep = 0;          // 0 = normal, +1, +2, +3, -1, -2, -3
let darkMode = false;
let highContrast = false;
let imagesHidden = false;
let linksHidden = false;

/* Helpers --------------------------------------------------------------- */
const root = document.documentElement;

/* Controles -------------------------------------------------------------- */
function toggleDark() {
  darkMode = !darkMode;
  root.classList.toggle("dark", darkMode);
}
function toggleContrast() {
  highContrast = !highContrast;
  root.classList.toggle("contrast", highContrast);
}
function updateScale(delta) {
  scaleStep = Math.max(MIN_SCALE - 1, Math.min(MAX_SCALE - 1, scaleStep + delta));
  root.style.fontSize = `${100 + scaleStep * 25}%`;
}
function toggleFontFamily() {
  root.classList.toggle("alt-font");
}
function toggleImages() {
  imagesHidden = !imagesHidden;
  document.querySelectorAll("img").forEach(img => {
    img.style.display = imagesHidden ? "none" : "";
  });
}
function toggleLinks() {
  linksHidden = !linksHidden;
  document.querySelectorAll("a").forEach(a => {
    a.style.color = linksHidden ? "inherit" : "";
    a.style.textDecoration = linksHidden ? "none" : "underline";
    a.style.fontWeight = linksHidden ? "700" : "";
  });
}

/* Barra flotante -------------------------------------------------------- */
const bar = document.createElement("div");
bar.className =
  "fixed right-4 bottom-4 z-50 flex flex-col gap-2 rounded-xl bg-white/80 p-3 shadow-lg";
bar.innerHTML = `
  <button class="btn" aria-label="Aumentar fuente">A+</button>
  <button class="btn" aria-label="Disminuir fuente">A-</button>
  <button class="btn" aria-label="Cambiar familia">Aa</button>
  <button class="btn" aria-label="Modo oscuro">🌙</button>
  <button class="btn" aria-label="Alto contraste">⚡</button>
  <button class="btn" aria-label="Ocultar imágenes">🖼️🚫</button>
  <button class="btn" aria-label="Resaltar links">🔗</button>
`;
[...bar.children].forEach((btn, i) => {
  btn.className = "rounded-md border bg-footer-gray px-2 py-1 text-xs font-semibold";
  btn.addEventListener("click", () => {
    switch (i) {
      case 0: updateScale(+1); break;
      case 1: updateScale(-1); break;
      case 2: toggleFontFamily(); break;
      case 3: toggleDark(); break;
      case 4: toggleContrast(); break;
      case 5: toggleImages(); break;
      case 6: toggleLinks(); break;
    }
  });
});
document.body.appendChild(bar);

/* Cursor personalizado -------------------------------------------------- */
root.style.cursor = "url('img/cursor.svg'), auto";
