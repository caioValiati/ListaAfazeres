import { BrowserRouter as Router } from "react-router-dom";

import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { RootPages } from "./pages";

import { ConfigProvider } from "antd";

dayjs.locale("pt-br"); // use locale

function App() {
  return (
    <ConfigProvider
      theme={{
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
      }}
    >
      <Router>
        <RootPages />
      </Router>
    </ConfigProvider>
  );
}

export default App;
