import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from "antd";
import { TasksProgress } from "./tasksProgress";
import { MdEditSquare } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { Task } from "./task";
import styles from "./styles.module.scss";
import { CustomEmpty } from "./empty";
export const ListCard = ({ lista }) => {
    var _a;
    const handleChangeCheck = (task) => {
        console.log(task);
    };
    const cor = (_a = lista.cor) !== null && _a !== void 0 ? _a : '#FAFAFA';
    const qntdTarefas = lista.tarefas.length;
    const qntdConcluidas = lista.tarefas.filter((t) => t.concluida).length;
    return (_jsxs("div", { className: styles.listCard, style: {
            background: `linear-gradient(190deg, rgba(2,0,36,0) 50%, ${cor}30 90%)`,
        }, children: [_jsx("h3", { children: lista.titulo }), _jsxs("div", { className: styles.listCardContent, children: [_jsxs("div", { className: styles.backdrop, children: [_jsx("div", { style: { background: cor + "30" } }), _jsx("span", { style: {
                                    border: "30px solid " + cor + "41",
                                } })] }), _jsx(Flex, { vertical: true, gap: ".6rem", children: qntdTarefas > 0
                            ? lista.tarefas.map((task) => (_jsx(Task, { task: task, handleChangeCheck: handleChangeCheck }, task.id)))
                            : _jsx(CustomEmpty, { description: "AInda n\u00E3o existem tarefas nesta lista" }) })] }), _jsxs(Flex, { className: styles.listaFooter, justify: "space-between", align: "center", children: [_jsx(TasksProgress, { totalQnt: qntdTarefas, concluidasQnt: qntdConcluidas }), _jsxs(Flex, { align: "center", gap: 12, children: [_jsx(MdEditSquare, { size: `1.4rem` }), _jsx(IoMdTrash, { size: `1.4rem` })] })] })] }, lista.id));
};
