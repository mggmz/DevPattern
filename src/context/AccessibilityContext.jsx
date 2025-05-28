import { createContext, useContext, useState, useEffect } from "react";
import clsx from "clsx";

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [fontScale, setFontScale] = useState(0);           // –3…+3
  const [fontFamily, setFontFamily] = useState("sans");    // sans | serif
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [daltonism, setDaltonism] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [cursorLarge, setCursorLarge] = useState(false);

  /* Persistir en localStorage */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("a11y") || "{}");
    Object.keys(saved).forEach(k => { saved[k] !== undefined && eval(`set${k[0].toUpperCase()+k.slice(1)}(saved[k])`); });
  }, []);
  useEffect(() => {
    localStorage.setItem("a11y", JSON.stringify({ fontScale, fontFamily, darkMode, highContrast, daltonism, hideImages, highlightLinks, cursorLarge }));
    document.documentElement.dataset.darkMode = darkMode;
    document.body.className = clsx(
      "antialiased",
      fontFamily === "serif" && "font-serif",
      highContrast && "contrast-200",
      daltonism && "grayscale",
      highlightLinks && "underline",
      cursorLarge && "cursor-large"
    );
    document.documentElement.style.fontSize = `${100 + fontScale * 10}%`;
    if (hideImages) {
      [...document.images].forEach(img => (img.style.display = "none"));
    } else {
      [...document.images].forEach(img => (img.style.display = ""));
    }
  }, [fontScale, fontFamily, darkMode, highContrast, daltonism, hideImages, highlightLinks, cursorLarge]);

  const value = { fontScale, setFontScale, fontFamily, setFontFamily, darkMode, setDarkMode, highContrast, setHighContrast, daltonism, setDaltonism, hideImages, setHideImages, highlightLinks, setHighlightLinks, cursorLarge, setCursorLarge };
  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

export const useA11y = () => useContext(AccessibilityContext);
