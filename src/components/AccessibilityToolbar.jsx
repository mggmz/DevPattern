import React from 'react';

export default function AccessibilityControls() {
  const adjustFont = (scale) => {
    document.documentElement.style.setProperty('--font-scale', scale);
  };
  const changeFontFamily = (family) => {
    document.documentElement.style.setProperty('--font-family', family);
  };
  const toggleClass = (cls) => {
    document.body.classList.toggle(cls);
  };
  return (
    <div className="fixed top-16 right-4 bg-white shadow-lg p-2 rounded flex flex-col space-y-1 z-50">
      <button onClick={() => adjustFont(3)}>A³</button>
      <button onClick={() => adjustFont(1)}>A¹</button>
      <button onClick={() => adjustFont(0.5)}>A⁻¹</button>
      <button onClick={() => changeFontFamily('Georgia, serif')}>Fuente Serif</button>
      <button onClick={() => changeFontFamily('Inter, sans-serif')}>Fuente Sans</button>
      <button onClick={() => toggleClass('dark')}>🌓</button>
      <button onClick={() => toggleClass('high-contrast')}>⚫⚪</button>
      <button onClick={() => toggleClass('color-blind')}>🟦🟨</button>
      <button onClick={() => toggleClass('cursor-large')}>Cursor+</button>
      <button onClick={() => toggleClass('hide-images')}>ImgOff</button>
      <button onClick={() => toggleClass('hide-links')}>LinksOff</button>
    </div>
  );
}