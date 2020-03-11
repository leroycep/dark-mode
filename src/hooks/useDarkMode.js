import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export function useDarkMode() {
  const [darkMode, setStoredValue] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setStoredValue];
}
