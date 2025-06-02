import { BrowserRouter } from "react-router-dom";
import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { RootPages } from "./pages";
import { ConfigProvider, Modal } from "antd";
import { ThemeProvider, useTheme } from "./theme/themeContext";
import { ThemeChangeSwitch } from "./theme/themeChangeSwitch";
import { FaSignOutAlt } from 'react-icons/fa'
import { useState } from "react";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const signed = !!JSON.parse(localStorage.getItem("auth"))?.token;

  const showLogoutModal = () => {
    setIsModalVisible(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ThemeProvider>
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 16,
          display: "flex",
          gap: 16,
          alignItems: "center"
        }}
      >
        <ThemeChangeSwitch />
        {
          signed && (
            <FaSignOutAlt onClick={showLogoutModal} color="var(--light)" />
          )
        }
      </div>
        <Modal
          title="Tem certeza que quer fazer logout?"
          open={isModalVisible}
          onOk={handleLogout}
          onCancel={handleCancel}
          okText="Sim"
          cancelText="Cancelar"
        />
      <AppContent />
    </ThemeProvider>
  );
}
