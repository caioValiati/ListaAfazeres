import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Form, Input, message, Modal } from "antd";
export const RenderEmailChangeModal = ({ visible, email, setVisible, setNewEmail, }) => {
    const [emailForm] = Form.useForm();
    const changeEmail = (values) => {
        setNewEmail(values.email);
        setVisible(false);
        message.success("Email atualizado com sucesso!");
    };
    return (_jsx(Modal, { title: "Alterar email", open: visible, footer: null, onCancel: () => setVisible(false), children: _jsxs(Form, { form: emailForm, name: "email_change_form", onFinish: changeEmail, layout: "vertical", children: [_jsx(Form.Item, { name: "email", initialValue: email, rules: [
                        { required: true, message: "Por favor, insira seu e-mail!" },
                        { type: "email", message: "E-mail inválido!" },
                    ], children: _jsx(Input, { placeholder: "Seu e-mail cadastrado" }) }), _jsxs(Form.Item, { children: [_jsx(Button, { onClick: () => setVisible(false), style: { marginRight: 8 }, children: "Cancelar" }), _jsx(Button, { type: "primary", htmlType: "submit", children: "Confirmar" })] })] }) }));
};
