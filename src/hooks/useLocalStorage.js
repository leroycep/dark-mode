import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [storedValue, setValue] = useState(() => {
    const stored = window.localStorage.getItem(key);
    if (stored === undefined) {
      return defaultValue;
    } else {
      return JSON.parse(stored);
    }
  });

  const setStoredValue = newValue => {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setStoredValue];
}
