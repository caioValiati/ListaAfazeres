import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from "react";
// import { RoutersProject } from '@/features';
import { App, message, notification } from "antd";
import { RoutesComponent } from "../routes";
const AppContext = createContext({});
export function RootPages() {
    const [active, setActive] = useState([]), [_, contextHolder] = notification.useNotification(), [__, contextMessage] = message.useMessage(), [isMenuOpen, setIsMenuOpen] = useState(false);
    function MessageNotification({ sendNotification, sendMessage, text, textDetails, type = "success", }) {
        if (sendMessage === true || sendMessage === undefined)
            message[type](text);
        if (sendNotification === true || sendNotification === undefined)
            notification[type]({ message: textDetails || text });
    }
    return (_jsx(App, { style: { height: "100%", width: "100%", boxSizing: "border-box" }, children: _jsxs(AppContext.Provider, { value: {
                isMenuOpen,
                setIsMenuOpen,
                active,
                setActive,
                MessageNotification,
            }, children: [contextHolder, contextMessage, _jsx(RoutesComponent, {})] }) }));
}
export function useAppContext() {
    const context = useContext(AppContext);
    return context;
}
