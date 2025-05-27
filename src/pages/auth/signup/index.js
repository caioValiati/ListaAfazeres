import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Form, Input, Button, Divider, Flex } from "antd";
import styles from "./styles.module.scss";
export default function Signup() {
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values) => {
        setLoading(true);
        console.log("Valores recebidos do formulário:", values);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
    return (_jsxs("div", { className: styles.loginContainer, children: [_jsx("div", { className: styles.backdrop, children: _jsx("div", {}) }), _jsxs("div", { children: [_jsxs("div", { className: styles.titleContainer, children: [_jsx("h1", { children: "Criar Conta" }), _jsx("p", { children: "Insira os dados da sua conta abaixo" })] }), _jsxs(Form, { name: "login_form", initialValues: { remember: true }, onFinish: onFinish, size: "large", layout: "vertical", children: [_jsx(Form.Item, { name: "nome", rules: [{ required: true, message: "Por favor, insira seu nome!" }], children: _jsx(Input, { variant: "underlined", placeholder: "Nome Completo" }) }), _jsx(Form.Item, { name: "email", rules: [
                                    { required: true, message: "Por favor, insira seu e-mail!" },
                                    { type: "email", message: "E-mail inválido!" },
                                ], children: _jsx(Input, { variant: "underlined", placeholder: "E-mail" }) }), _jsx(Form.Item, { name: "password", rules: [
                                    { required: true, message: "Por favor, insira sua senha!" },
                                ], children: _jsx(Input.Password, { placeholder: "Senha", variant: "underlined" }) }), _jsx(Form.Item, { name: "confirmPassword", dependencies: ["password"], hasFeedback: true, rules: [
                                    { required: true, message: "Por favor, confirme sua senha!" },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("password") === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error("As senhas não conferem!"));
                                        },
                                    }),
                                ], children: _jsx(Input.Password, { placeholder: "Repita sua senha", variant: "underlined" }) }), _jsx(Form.Item, { children: _jsx(Button, { style: { height: 56 }, type: "primary", htmlType: "submit", loading: loading, block: true, children: "Criar" }) }), _jsx(Divider, {}), _jsx("div", { children: _jsxs(Flex, { justify: "space-between", align: "center", children: [_jsx("p", { children: "J\u00E1 tem uma conta?" }), _jsx(Button, { type: "link", href: "/login", children: "Entre" })] }) })] })] })] }));
}
