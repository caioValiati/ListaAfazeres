import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ColorPicker, Flex, Form, Input, Modal } from "antd";
import styles from "./styles.module.scss";
import { criarListaTarefa } from "../../data/services/ListaService";
export const ModalLista = ({ open, handleClose, }) => {
    const colors = [
        "#FFD700",
        "#FFA500",
        "#FF4500",
        "#DC143C",
        "#FF69B4",
        "#8B008B",
        "#9400D3",
        "#4B0082",
        "#4169E1",
        "#1E90FF",
        "#00BFFF",
        "#ADD8E6",
        "#8FBC8F",
        "#3CB371",
        "#2E8B57",
        "#556B2F",
        "#A0522D",
        "#D2691E",
        "#FF8C00",
        "#FF7F50",
    ];
    const handlenewList = async (data) => {
        try {
            data.cor = data.cor.toHexString();
            const res = await criarListaTarefa(data);
            console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }
    };
    return (_jsx(Modal, { maskProps: { style: { backgroundColor: "var(--light)", opacity: 0.1 } }, title: "Criar nova lista", open: open, onCancel: handleClose, className: styles.modalLista, classNames: { header: styles.modalHeader }, footer: null, children: _jsxs(Form, { onFinish: handlenewList, children: [_jsxs(Flex, { gap: 16, children: [_jsx(Form.Item, { label: "Descri\u00E7\u00E3o", name: "titulo", rules: [{ required: true, message: "Campo obrigatório" }], children: _jsx(Input, { placeholder: "Descri\u00E7\u00E3o" }) }), _jsx(Form.Item, { label: "Cor", name: "cor", rules: [{ required: true, message: "Obrigatório" }], children: _jsx(ColorPicker, { presets: [
                                    {
                                        colors: colors,
                                        label: "",
                                    },
                                ] }) })] }), _jsxs(Flex, { justify: "end", gap: 8, children: [_jsx(Button, { type: "text", onClick: handleClose, children: "Cancelar" }), _jsx(Form.Item, { children: _jsx(Button, { htmlType: "submit", type: "primary", children: "Salvar" }) })] })] }) }));
};
