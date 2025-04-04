/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from "react";

// import { RoutersProject } from '@/features';
import { App, message, notification } from "antd";
import { RoutesComponent } from "../routes";

interface IMessageNotificationProps {
  sendNotification?: boolean;
  sendMessage?: boolean;
  text: string;
  textDetails?: string;
  type?: "success" | "info" | "error" | "warning";
}

interface IAppContext {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  active: string[];
  setActive: React.Dispatch<React.SetStateAction<string[]>>;
  MessageNotification: (props: IMessageNotificationProps) => void;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export function RootPages() {
  const [active, setActive] = useState<string[]>([]),
    [_, contextHolder] = notification.useNotification(),
    [__, contextMessage] = message.useMessage(),
    [isMenuOpen, setIsMenuOpen] = useState(false);

  function MessageNotification({
    sendNotification,
    sendMessage,
    text,
    textDetails,
    type = "success",
  }: IMessageNotificationProps) {
    if (sendMessage === true || sendMessage === undefined) message[type](text);

    if (sendNotification === true || sendNotification === undefined)
      notification[type]({ message: textDetails || text });
  }

  return (
    <App style={{ height: "100%", width: "100%", boxSizing: "border-box" }}>
      <AppContext.Provider
        value={{
          isMenuOpen,
          setIsMenuOpen,
          active,
          setActive,
          MessageNotification,
        }}
      >
        {contextHolder}
        {contextMessage}
        <RoutesComponent />
      </AppContext.Provider>
    </App>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
