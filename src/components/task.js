import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Radio } from "antd";
import { MdEditSquare } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import styles from "./styles.module.scss";
export const Task = ({ task, handleChangeCheck, }) => {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 1:
                return "green";
            case 2:
                return "orange";
            case 3:
                return "red";
        }
    };
    return (_jsx("div", { className: styles.taskCard, children: _jsxs(Flex, { children: [_jsx(Radio, { checked: task.concluida, onClick: () => handleChangeCheck(task), className: styles.radio }), _jsxs(Flex, { justify: "space-between", align: "center", className: styles.taskCardContent, children: [_jsxs("div", { className: styles.taskCardHeader, children: [_jsx("h4", { children: task.descricao }), _jsxs(Flex, { align: "center", gap: 8, children: [_jsx("p", { children: "Prioridade: " }), _jsx("div", { style: {
                                                width: 10,
                                                height: 10,
                                                borderRadius: "50%",
                                                backgroundColor: getPriorityColor(task.prioridade),
                                            } })] })] }), _jsxs(Flex, { gap: 12, align: "center", children: [_jsx(MdEditSquare, { size: `1rem` }), _jsx(IoMdTrash, { size: `1rem` })] })] })] }) }));
};
