import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Form, Input, Modal, Select } from "antd";
import styles from "./styles.module.scss";
export const ModalTask = ({ open, handleClose, }) => {
    return (_jsx(Modal, { maskProps: { style: { backgroundColor: "rgba(0, 0, 0, 0.1)" } }, title: "Criar nova lista", open: open, onCancel: handleClose, className: styles.modalLista, classNames: { header: styles.modalHeader }, cancelButtonProps: { type: "text" }, children: _jsx(Form, { children: _jsxs(Flex, { gap: 16, children: [_jsx(Form.Item, { label: "Descri\u00E7\u00E3o", name: "descricao", rules: [{ required: true, message: "Campo obrigatório" }], children: _jsx(Input, { placeholder: "Descri\u00E7\u00E3o" }) }), _jsx(Form.Item, { label: "Prioridade", name: "prioridade", children: _jsx(Select, { defaultValue: "normal", options: [
                                { value: "normal", label: "Normal" },
                                { value: "alta", label: "Alta" },
                                { value: "urgente", label: "Urgente" },
                            ] }) })] }) }) }));
};
