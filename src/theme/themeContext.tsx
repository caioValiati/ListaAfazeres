// src/theme/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeConfig } from "antd/es/config-provider/context";
import { darkTheme, lightTheme } from "./themes";

type ThemeName = "light" | "dark";

interface ThemeContextType {
  themeName: ThemeName;
  theme: ThemeConfig;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const cssVars = {
  dark: {
    "--dark": "#101010",
    "--dark-2": "#2222229a",
    "--dark-3": "#444444",
    "--light": "#FAFAFA",
    "--light-2": "#bebebe",
    "--light-3": "#fafafa41",
    "--font-main": '"Rubik", sans-serif',
    "--font-alt": "'Roboto', sans-serif",
  },
  light: {
    "--dark": "#FAFAFA",
    "--dark-2": "#e9e9e981",
    "--dark-3": "#cccccc",
    "--light": "#101010",
    "--light-2": "#444444",
    "--light-3": "#10101019",
    "--font-main": '"Rubik", sans-serif',
    "--font-alt": "'Roboto', sans-serif",
  },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeName;
    if (storedTheme) {
      setThemeName(storedTheme);
    }
  }, []);

  useEffect(() => {
    const vars = cssVars[themeName];
    for (const key in vars) {
      document.documentElement.style.setProperty(
        key,
        vars[key as keyof typeof vars]
      );
    }
  }, [themeName]);

  const toggleTheme = () => {
    const newTheme = themeName === "dark" ? "light" : "dark";
    setThemeName(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const theme = themeName === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
