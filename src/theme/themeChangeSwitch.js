import { jsx as _jsx } from "react/jsx-runtime";
import { Switch } from "antd";
import { useTheme } from "./themeContext";
import { MoonFilled, SunFilled } from "@ant-design/icons";
export const ThemeChangeSwitch = () => {
    const { toggleTheme } = useTheme();
    return (_jsx(Switch, { onChange: toggleTheme, checkedChildren: _jsx(SunFilled, {}), unCheckedChildren: _jsx(MoonFilled, {}), defaultChecked: true }));
};
