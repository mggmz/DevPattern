/*  Accesibilidad / Acabildad global
    1-2  Zoom texto (-/+ hasta 3x)
    3    Cambio de fuente
    4    Dark mode
    5    Alto contraste (daltonismo)
    6    Cambio de cursor
    7    Ocultar imágenes
    8    Ocultar links & resaltar texto
--------------------------------------------------------------- */

const html = document.documentElement;

/* ─ Utilidades ─ */
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const qs = sel => document.querySelector(sel);

/* Estado */
let scale = 1;
let fontSwitch = false;
let hideImgs = false;
let hideLinks = false;
let highContrast = false;

/* Controles (puedes llamarlos desde botones) */
window.a11y = {
  zoomIn()  { scale = clamp(scale + 0.25, 1, 3); html.style.fontSize = `${scale}rem`; },
  zoomOut() { scale = clamp(scale - 0.25, 1, 3); html.style.fontSize = `${scale}rem`; },
  toggleFont() {
    fontSwitch = !fontSwitch;
    html.classList.toggle('alt-font', fontSwitch);
  },
  toggleDark() { html.classList.toggle('dark'); },
  toggleContrast() {
    highContrast = !highContrast;
    html.classList.toggle('high-contrast', highContrast);
  },
  toggleCursor() { html.classList.toggle('bigger-cursor'); },
  toggleImages() {
    hideImgs = !hideImgs;
    document.querySelectorAll('img').forEach(img => img.style.display = hideImgs ? 'none' : '');
  },
  toggleLinks() {
    hideLinks = !hideLinks;
    document.querySelectorAll('a').forEach(a => {
      if (hideLinks) {
        a.dataset.href = a.href;
        a.removeAttribute('href');
        a.classList.add('bg-yellow-200', 'text-black');
      } else {
        a.href = a.dataset.href;
        a.classList.remove('bg-yellow-200', 'text-black');
      }
    });
  }
};

/* Cursores y contrastes en CSS */