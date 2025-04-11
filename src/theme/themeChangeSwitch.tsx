import { Switch } from "antd";
import { useTheme } from "./themeContext";
import { MoonFilled, SunFilled } from "@ant-design/icons";

export const ThemeChangeSwitch = () => {
  const { toggleTheme } = useTheme();

  return (
    <Switch
      onChange={toggleTheme}
      checkedChildren={<SunFilled />}
      unCheckedChildren={<MoonFilled />}
      defaultChecked
    />
  );
};
