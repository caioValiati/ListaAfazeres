import { jsx as _jsx } from "react/jsx-runtime";
// src/theme/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./themes";
const ThemeContext = createContext(undefined);
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
export const ThemeProvider = ({ children, }) => {
    const [themeName, setThemeName] = useState("dark");
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setThemeName(storedTheme);
        }
    }, []);
    useEffect(() => {
        const vars = cssVars[themeName];
        for (const key in vars) {
            document.documentElement.style.setProperty(key, vars[key]);
        }
    }, [themeName]);
    const toggleTheme = () => {
        const newTheme = themeName === "dark" ? "light" : "dark";
        setThemeName(newTheme);
        localStorage.setItem("theme", newTheme);
    };
    const theme = themeName === "dark" ? darkTheme : lightTheme;
    return (_jsx(ThemeContext.Provider, { value: { themeName, theme, toggleTheme }, children: children }));
};
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
