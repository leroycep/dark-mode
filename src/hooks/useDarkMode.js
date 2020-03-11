import React, { useState, useEffect } from 'react';

export function useDarkMode() {
  const [darkMode, setStoredValue] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setStoredValue];
}
