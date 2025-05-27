import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Form, Input } from "antd";
import { useState } from "react";
export const RenderNewPasswordStep = ({ setCurrentStep, }) => {
    const [loading, setLoading] = useState(false);
    const [passwordForm] = Form.useForm();
    const resetPassword = (values) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log(values);
            setCurrentStep(3);
        }, 1500);
    };
    return (_jsxs(Form, { form: passwordForm, name: "reset_password_form", onFinish: resetPassword, size: "large", layout: "vertical", children: [_jsx("p", { children: "Agora voc\u00EA pode definir uma nova senha para sua conta" }), _jsx(Form.Item, { name: "newPassword", rules: [
                    { required: true, message: "Por favor, insira sua nova senha!" },
                    { min: 6, message: "A senha deve ter pelo menos 6 caracteres!" },
                ], hasFeedback: true, children: _jsx(Input.Password, { placeholder: "Nova senha", variant: "underlined" }) }), _jsx(Form.Item, { name: "confirmPassword", dependencies: ["newPassword"], hasFeedback: true, rules: [
                    { required: true, message: "Por favor, confirme sua nova senha!" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("newPassword") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("As senhas não conferem!"));
                        },
                    }),
                ], children: _jsx(Input.Password, { placeholder: "Repita sua nova senha", variant: "underlined" }) }), _jsx(Form.Item, { children: _jsx(Button, { style: { height: 56 }, type: "primary", htmlType: "submit", loading: loading, block: true, children: "Redefinir senha" }) })] }));
};
