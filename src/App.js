import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter } from "react-router-dom";
import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { RootPages } from "./pages";
import { ConfigProvider } from "antd";
import { ThemeProvider, useTheme } from "./theme/themeContext";
import { ThemeChangeSwitch } from "./theme/themeChangeSwitch";
dayjs.locale("pt-br");
function AppContent() {
    const { theme } = useTheme();
    return (_jsx(ConfigProvider, { theme: theme, children: _jsx(BrowserRouter, { children: _jsx(RootPages, {}) }) }));
}
export default function App() {
    return (_jsxs(ThemeProvider, { children: [_jsx("div", { style: {
                    position: "absolute",
                    right: 16,
                }, children: _jsx(ThemeChangeSwitch, {}) }), _jsx(AppContent, {})] }));
}
