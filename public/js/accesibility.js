/* Barra de accesibilidad DevPattern
   Se inyecta al cargar el documento
----------------------------------------------------- */
(() => {
  /*  CONFIG  */
  const MAX = 3;
  const MIN = 1;
  let step = 0;
  let dark = false, contrast = false, imgOff = false, linksOff = false;
  const root = document.documentElement;

  /*  HELPERS  */
  const scale = d => {
    step = Math.max(MIN - 1, Math.min(MAX - 1, step + d));
    root.style.fontSize = `${100 + step * 25}%`;
  };
  const toggle = (flag, cls) => {
    flag = !flag;
    root.classList.toggle(cls, flag);
    return flag;
  };

  /*  CREA BARRA  */
  const bar = document.createElement('div');
  bar.className =
    'fixed right-4 bottom-4 z-50 flex flex-col gap-2 ' +
    'rounded-xl bg-white/80 p-3 shadow-lg';

  const buttons = [
    { txt: 'A+', act: () => scale(+1) },
    { txt: 'A-', act: () => scale(-1) },
    { txt: 'Aa', act: () => root.classList.toggle('alt-font') },
    { txt: '🌙', act: () => (dark = toggle(dark, 'dark')) },
    { txt: '⚡', act: () => (contrast = toggle(contrast, 'contrast')) },
    { txt: '🖼️🚫', act: () => {
        imgOff = !imgOff;
        document.querySelectorAll('img').forEach(img => {
          img.style.display = imgOff ? 'none' : '';
        });
      }
    },
    { txt: '🔗', act: () => {
        linksOff = !linksOff;
        document.querySelectorAll('a').forEach(a => {
          a.style.color = linksOff ? 'inherit' : '';
          a.style.textDecoration = linksOff ? 'none' : 'underline';
          a.style.fontWeight = linksOff ? '700' : '';
        });
      }
    }
  ];

  buttons.forEach(b => {
    const btn = document.createElement('button');
    btn.textContent = b.txt;
    btn.className =
      'rounded-md border bg-footer-gray px-2 py-1 ' +
      'text-xs font-semibold';
    btn.addEventListener('click', b.act);
    bar.appendChild(btn);
  });

  /*  Aplica cursor personalizado  */
  root.style.cursor = "url('/img/cursor.png'), auto";

  /*  Añade al body  */
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(bar);
  });
})();
