import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [fontSize, setFontSize] = useState(1);
  const [fontFamily, setFontFamily] = useState('sans');
  const [dark, setDark] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [lowVision, setLowVision] = useState(false);
  const [noImages, setNoImages] = useState(false);
  const [noLinks, setNoLinks] = useState(false);

  return (
    <ThemeContext.Provider value={{
      fontSize, setFontSize,
      fontFamily, setFontFamily,
      dark, setDark,
      highContrast, setHighContrast,
      lowVision, setLowVision,
      noImages, setNoImages,
      noLinks, setNoLinks
    }}>
      {children}
    </ThemeContext.Provider>
  );
}