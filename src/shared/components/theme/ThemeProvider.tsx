import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { flushSync } from "react-dom";

export type Mode = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

const initialMode = (): Mode => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  setMode: () => {},
});

export const useTheme = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const toggleThemeMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(() => flushSync(() => setMode(newMode)));
    } else {
      setMode(newMode);
    }
  };

  return { mode, setMode, toggleThemeMode };
};

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<Mode>(initialMode);

  const value = useMemo(() => ({ mode, setMode }), [mode]);

  useLayoutEffect(() => {
    document.body.classList.toggle("dark", mode === "dark");
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
