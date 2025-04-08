// src/theme/themes.ts
import { ThemeConfig } from 'antd/es/config-provider/context';

export const lightTheme: ThemeConfig = {
  components: {
    Divider: {
      colorSplit: "#dddddd",
    },
    Input: {
      colorTextPlaceholder: "#666666",
      colorBgContainer: "#ffffff",
      colorIcon: "#666666",
      colorBorder: "#cccccc",
    },
    Button: {
      colorPrimary: "#1677ff",
      borderRadius: 4,
      borderRadiusLG: 4,
    },
  },
  token: {
    colorPrimary: "#1677ff",
    colorText: "#000000",
    colorLink: "#1677ff",
  },
};

export const darkTheme: ThemeConfig = {
  components: {
    Divider: {
      colorSplit: "#444444",
    },
    Input: {
      colorTextPlaceholder: "#444444",
      colorBgContainer: "transparent",
      colorIcon: "#444444",
      colorBorder: "#444444",
      paddingInlineLG: 0,
    },
    Button: {
      colorPrimary: "#444444",
      borderRadius: 2,
      borderRadiusLG: 2,
    },
  },
  token: {
    colorPrimary: "#444444",
    colorText: "#bebebe",
    colorLink: "#bebebe",
  },
};
