import { createContext, useContext, useState } from "react";

// import { RoutersProject } from '@/features';
import { App, message, Modal, notification } from "antd";
import { RoutesComponent } from "../routes";
import { HookAPI } from "antd/es/modal/useModal";

interface IMessageNotificationProps {
  popupType: 'message' | 'notification',
  text: string,
  textDetails?: string,
  messageType?: "success" | "info" | "error" | "warning",
}

interface IAppContext {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  active: string[];
  setActive: React.Dispatch<React.SetStateAction<string[]>>;
  MessageNotification: (props: IMessageNotificationProps) => void;
  modal: HookAPI
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export function RootPages() {
  const [active, setActive] = useState<string[]>([]),
    [notificationApi, contextHolder] = notification.useNotification(),
    [messageApi, contextMessage] = message.useMessage(),
    [modal, modalContextHolder] = Modal.useModal(),
    [isMenuOpen, setIsMenuOpen] = useState(false);

  function MessageNotification({
    popupType,
    text,
    textDetails,
    messageType = "success"
  }: IMessageNotificationProps) {

    if (popupType === 'message') messageApi[messageType](text);

    if (popupType === 'notification')
      notificationApi[messageType]({ message: textDetails || text });
  }

  return (
    <App style={{ height: "100%", width: "100%", boxSizing: "border-box" }}>
      <AppContext.Provider
        value={{
          setIsMenuOpen,
          setActive,
          MessageNotification,
          modal,
          isMenuOpen,
          active,
        }}
      >
        {contextHolder}
        {contextMessage}
        {modalContextHolder}
        <RoutesComponent />
      </AppContext.Provider>
    </App>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
