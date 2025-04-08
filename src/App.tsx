import { BrowserRouter as Router } from "react-router-dom";
import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { RootPages } from "./pages";
import { ConfigProvider } from "antd";
import { ThemeProvider, useTheme } from "./theme/themeContext";

dayjs.locale("pt-br");

function AppContent() {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={theme}>
      <Router>
        <RootPages />
      </Router>
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
