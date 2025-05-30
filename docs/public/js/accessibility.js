/* Barra de accesibilidad – DevPattern
   Controles de usabilidad con etiqueta descriptiva
-------------------------------------------------------------- */
(() => {
  /* ─── CONFIGURACIÓN ─────────────────────────────────────── */
  const MAX_STEP = 3, MIN_STEP = -3;
  let step = 0,
      dark = false,
      contrast = false,
      imgOff = false,
      linksOff = false,
      fontIndex = 0,
      cursorCross = false;          // estado del cursor en cruz

  const fonts = [
    '',
    "'Atkinson Hyperlegible', system-ui, sans-serif",
    "monospace"
  ];

  const root = document.documentElement;

  /* ─── HELPERS ──────────────────────────────────────────── */
  const scale = d => {
    step = Math.min(MAX_STEP, Math.max(MIN_STEP, step + d));
    root.style.fontSize = `${100 + step * 25}%`;
  };
  const toggleCls = (flag, cls) => {
    flag = !flag;
    root.classList.toggle(cls, flag);
    return flag;
  };

  // gestiona el cursor normal vs cruz
  const toggleCursor = () => {
    cursorCross = !cursorCross;
    if (cursorCross) {
      root.style.cursor = 'crosshair';  
    } else {
      root.style.cursor = "url('../img/cursor.png'), auto";
    }
  };

  // guarda TODOS los estados
  const saveState = () => {
    localStorage.setItem(
      'devpattern-accessibility',
      JSON.stringify({ step, dark, contrast, imgOff, linksOff, fontIndex, cursorCross })
    );
  };

  // carga y aplica el estado guardado
  const loadState = () => {
    const s = localStorage.getItem('devpattern-accessibility');
    if (!s) return;
    try {
      const st = JSON.parse(s);

      // zoom
      if (typeof st.step === 'number' && st.step !== 0) {
        scale(st.step);
      }
      // oscuro
      if (st.dark) {
        dark = toggleCls(dark, 'dark');
      }
      // alto contraste
      if (st.contrast) {
        contrast = toggleCls(contrast, 'contrast');
      }
      // imágenes
      if (st.imgOff) {
        imgOff = true;
        document.querySelectorAll('img').forEach(img => img.style.display = 'none');
      }
      // enlaces
      if (st.linksOff) {
        linksOff = true;
        document.querySelectorAll('a').forEach(a => {
          a.style.color = 'inherit';
          a.style.textDecoration = 'none';
          a.style.fontWeight = '700';
        });
      }
      // tipografía
      if (typeof st.fontIndex === 'number') {
        fontIndex = st.fontIndex % fonts.length;
        root.style.fontFamily = fonts[fontIndex] || '';
      }
      // cursor cruz
      if (st.cursorCross) {
        cursorCross = true;
        root.style.cursor = 'crosshair';
      }
    } catch (e) {
      console.warn('Estado de accesibilidad inválido', e);
    }
  };

  /* ─── DEFINICIÓN DE BOTONES ───────────────────────────── */
  const controls = [
    { icon: 'A+',    label: 'Zoom +',               action: () => scale(+1) },
    { icon: 'A−',    label: 'Zoom −',               action: () => scale(-1) },
    { icon: 'F',     label: 'Cambiar fuente',        action: () => {
        fontIndex = (fontIndex + 1) % fonts.length;
        root.style.fontFamily = fonts[fontIndex] || '';
      }
    },
    { icon: '🌙',    label: 'Modo oscuro',           action: () => dark = toggleCls(dark, 'dark') },
    { icon: '⚡',    label: 'Modo alto contraste',    action: () => contrast = toggleCls(contrast, 'contrast') },
    { icon: '🖼️🚫', label: 'Ocultar imágenes',        action: () => {
        imgOff = !imgOff;
        document.querySelectorAll('img').forEach(img =>
          img.style.display = imgOff ? 'none' : ''
        );
      }
    },
    { icon: '🔗',    label: 'Simplificar enlaces',    action: () => {
        linksOff = !linksOff;
        document.querySelectorAll('a').forEach(a => {
          a.style.color = linksOff ? 'inherit' : '';
          a.style.textDecoration = linksOff ? 'none' : 'underline';
          a.style.fontWeight = linksOff ? '700' : '';
        });
      }
    },
    // NUEVO: cursor cruz
    { icon: '✚',     label: 'Cursor en cruz',        action: toggleCursor }
  ];

  /* ─── MONTAJE DE LA BARRA ─────────────────────────────── */
  const bar = document.createElement('div');
  bar.className =
    'fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3 ' +
    'rounded-xl bg-white/80 p-3 shadow-lg';

  controls.forEach(ctrl => {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col items-center gap-1';

    const lbl = document.createElement('span');
    lbl.textContent = ctrl.label;
    lbl.className = 'text-xs font-semibold text-gray-700';

    const btn = document.createElement('button');
    btn.textContent = ctrl.icon;
    btn.className =
      'rounded-md border bg-footer-gray px-2 py-1 ' +
      'text-xs font-semibold';
    btn.addEventListener('click', () => {
      ctrl.action();
      saveState();
    });

    wrapper.appendChild(lbl);
    wrapper.appendChild(btn);
    bar.appendChild(wrapper);
  });

  /* ─── CURSOR INICIAL PERSONALIZADO ─────────────────────── */
  if (!cursorCross) {
    root.style.cursor = "url('../img/cursor.png'), auto";
  }

  /* ─── INYECCIÓN Y CARGA DEL ESTADO ────────────────────── */
  const inject = () => {
    document.body.appendChild(bar);
    loadState();
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
