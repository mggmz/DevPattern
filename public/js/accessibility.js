/* Barra de accesibilidad – DevPattern
   Inserta controles de usabilidad en la esquina inf-derecha.
-------------------------------------------------------------- */
(() => {

  /* CONFIG -------------------------------------------------- */
  const MAX = 3, MIN = 1;
  let step = 0;                 // escala tipográfica
  let dark = false, contrast = false, imgOff = false, linksOff = false;
  const root = document.documentElement;

  /* HELPERS ------------------------------------------------- */
  const scale = d => {
    step = Math.max(MIN - 1, Math.min(MAX - 1, step + d));
    root.style.fontSize = `${100 + step * 25}%`;
  };
  const toggleCls = (flag, cls) => {
    flag = !flag;
    root.classList.toggle(cls, flag);
    return flag;
  };

  /* CREA CONTENEDOR ---------------------------------------- */
  const bar = document.createElement('div');
  bar.className =
    'fixed right-4 bottom-4 z-50 flex flex-col gap-2 ' +
    'rounded-xl bg-white/80 p-3 shadow-lg';

  /* BOTONES ------------------------------------------------- */
  const buttons = [
    { txt:'A+',  cb:() => scale(+1) },
    { txt:'A-',  cb:() => scale(-1) },
    { txt:'Aa',  cb:() => root.classList.toggle('alt-font') },
    { txt:'🌙',  cb:() => (dark = toggleCls(dark,'dark')) },
    { txt:'⚡',  cb:() => (contrast = toggleCls(contrast,'contrast')) },
    { txt:'🖼️🚫', cb:() => {
        imgOff = !imgOff;
        document.querySelectorAll('img').forEach(img =>
          img.style.display = imgOff ? 'none' : '');
      }
    },
    { txt:'🔗',  cb:() => {
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
    btn.addEventListener('click', b.cb);
    bar.appendChild(btn);
  });

  /* CURSOR PERSONALIZADO ----------------------------------- */
  root.style.cursor = "url('/img/cursor.png'), auto";

  /* INYECCIÓN SEGURA --------------------------------------- */
  const inject = () => document.body.appendChild(bar);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
