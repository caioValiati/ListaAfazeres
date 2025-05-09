import { BrowserRouter } from "react-router";
import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { RootPages } from "./pages";
import { ConfigProvider } from "antd";
import { ThemeProvider, useTheme } from "./theme/themeContext";
import { ThemeChangeSwitch } from "./theme/themeChangeSwitch";

dayjs.locale("pt-br");

function AppContent() {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <RootPages />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          position: "absolute",
          right: 16,
        }}
      >
        <ThemeChangeSwitch />
      </div>
      <AppContent />
    </ThemeProvider>
  );
}
