import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, Form, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
export const RenderEmailConfirmationStep = ({ email, setIsEmailModalVisible, setCurrentStep, }) => {
    const [loading, setLoading] = useState(false);
    const requestResetCode = () => {
        setLoading(true);
        console.log("Enviando código para:", email);
        setTimeout(() => {
            setLoading(false);
            setCurrentStep(1);
            message.success(`Código enviado para ${email}`);
        }, 1500);
    };
    return (_jsxs("div", { children: [_jsx("p", { children: "Enviaremos um c\u00F3digo de verifica\u00E7\u00E3o para:" }), _jsxs(Flex, { align: "center", children: [_jsx("p", { children: email }), _jsx(Button, { style: { color: "#FFF" }, type: "text", icon: _jsx(EditOutlined, {}), onClick: () => setIsEmailModalVisible(true) })] }), _jsx("p", { children: "Por favor, verifique se voc\u00EA tem acesso a este email antes de prosseguir." }), _jsx(Form.Item, { children: _jsx(Button, { style: { height: 56, marginTop: 16 }, type: "primary", onClick: requestResetCode, loading: loading, block: true, children: "Enviar c\u00F3digo" }) }), _jsx("div", { children: _jsx(Button, { type: "link", href: "/login", children: "Voltar para o login" }) })] }));
};
