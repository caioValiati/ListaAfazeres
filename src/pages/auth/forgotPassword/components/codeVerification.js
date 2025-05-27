import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button, Flex, Form, Input, message } from "antd";
import { useState } from "react";
export const RenderCodeVerificationStep = ({ email, setCurrentStep, }) => {
    const [loading, setLoading] = useState(false);
    const [codeForm] = Form.useForm();
    const verifyCode = (values) => {
        setLoading(true);
        console.log("Verificando código:", values.code);
        setTimeout(() => {
            setLoading(false);
            setCurrentStep(2);
            message.success("Código verificado com sucesso!");
        }, 1500);
    };
    return (_jsxs(Form, { form: codeForm, name: "code_verification_form", onFinish: verifyCode, size: "large", layout: "vertical", children: [_jsxs("p", { children: ["Enviamos um c\u00F3digo de verifica\u00E7\u00E3o para ", email] }), _jsx(Form.Item, { name: "code", rules: [
                    { required: true, message: "Por favor, insira o código recebido!" },
                    { len: 6, message: "O código deve ter 6 dígitos!" },
                ], children: _jsx(Input, { variant: "underlined", placeholder: "C\u00F3digo de verifica\u00E7\u00E3o", maxLength: 6 }) }), _jsx(Form.Item, { children: _jsx(Button, { style: { height: 56 }, type: "primary", htmlType: "submit", loading: loading, block: true, children: "Verificar c\u00F3digo" }) }), _jsx(Flex, { justify: "center", children: _jsx(Button, { style: { fontSize: ".9rem" }, type: "link", onClick: () => {
                        setCurrentStep(0);
                    }, children: "N\u00E3o recebeu o c\u00F3digo? Reenviar" }) })] }));
};
