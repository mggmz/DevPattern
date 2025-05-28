import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function AccessibilityControls() {
  const {
    fontSize, setFontSize,
    fontFamily, setFontFamily,
    dark, setDark,
    highContrast, setHighContrast,
    lowVision, setLowVision,
    noImages, setNoImages,
    noLinks, setNoLinks
  } = useContext(ThemeContext);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 rounded shadow-lg space-y-1 z-50">
      <button onClick={() => setFontSize(s => Math.min(s + 0.5, 3))}>A+</button>
      <button onClick={() => setFontSize(s => Math.max(s - 0.5, 0.5))}>A-</button>
      <select onChange={e => setFontFamily(e.target.value)} value={fontFamily}>
        <option value="sans">Sans</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>
      <button onClick={() => setDark(d => !d)}>Modo Oscuro</button>
      <button onClick={() => setHighContrast(h => !h)}>Alto Contraste</button>
      <button onClick={() => setLowVision(l => !l)}>Sin Imágenes</button>
      <button onClick={() => setNoLinks(n => !n)}>Sin Links</button>
    </div>
  );
}