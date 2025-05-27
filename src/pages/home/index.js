import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo, useEffect, useCallback } from "react";
import { Divider, Flex } from "antd";
import { CiCirclePlus } from "react-icons/ci";
import styles from "./styles.module.scss";
import { buscarTarefas } from "../../../data/services/TarefaService";
import { buscarListas } from "../../../data/services/ListaService";
import { TasksProgress } from "../../components/tasksProgress";
import { Task } from "../../components/task";
import { ListCard } from "../../components/listCard";
import { ModalLista } from "../../components/modalLista";
import { ModalTask } from "../../components/modalTask";
import Loading from "../../components/loader";
import { CustomEmpty } from "../../components/empty";
import { FiCoffee } from "react-icons/fi";
export default function Home() {
    const [openModalLista, setOpenModalLista] = useState(false);
    const [openModalTask, setOpenModalTask] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [listas, setListas] = useState([]);
    const [loading, setLoading] = useState(false);
    const tarefasConcluidas = useMemo(() => tasks.filter((t) => t.concluida).length, [tasks]);
    const toggleTaskConcluida = useCallback((task) => {
        setTasks((prev) => prev.map((t) => t.id === task.id ? { ...t, concluida: !t.concluida } : t));
    }, []);
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [resTarefas, resListas] = await Promise.all([
                buscarTarefas({ prioridade: 3 }),
                buscarListas(),
            ]);
            setTasks(Array.isArray(resTarefas.data) ? resTarefas.data : []);
            setListas(Array.isArray(resListas.data) ? resListas.data : []);
        }
        catch (error) {
            console.error("Erro ao carregar dados da Home:", error);
            setTasks([]);
            setListas([]);
        }
        finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (_jsxs("div", { className: styles.mainContainer, children: [_jsxs(Flex, { className: styles.header, align: "end", justify: "space-between", children: [_jsxs("div", { className: styles.headerTitle, children: [_jsx("p", { children: "Ol\u00E1, Caio" }), _jsx("h1", { children: "Suas tarefas urgentes" })] }), _jsx(TasksProgress, { totalQnt: tasks.length, concluidasQnt: tarefasConcluidas })] }), _jsx(Flex, { vertical: true, gap: "0.6rem", className: styles.urgentTasksContainer, children: loading ? (_jsx(Loading, { loading: true, size: 48 })) : tasks.length > 0 ? (tasks.map((task) => (_jsx(Task, { task: task, handleChangeCheck: toggleTaskConcluida }, task.id)))) : (_jsx("div", { style: { marginTop: "1rem" }, children: _jsx(CustomEmpty, { description: "Sem tarefas urgentes por enquanto.", icon: _jsx(FiCoffee, {}) }) })) }), _jsx(Divider, {}), _jsxs(Flex, { className: styles.header, justify: "space-between", align: "center", children: [_jsxs("h1", { children: ["Suas listas (", listas.length, ")"] }), _jsx(CiCirclePlus, { style: { cursor: "pointer" }, size: 28, onClick: () => setOpenModalLista(true) })] }), loading ? (_jsx(Loading, { loading: true, size: 40 })) : listas.length > 0 ? (listas.map((lista) => _jsx(ListCard, { lista: lista }, lista.id))) : (_jsx(CustomEmpty, { description: "Voc\u00EA ainda n\u00E3o tem listas." })), _jsx(ModalLista, { open: openModalLista, handleClose: () => setOpenModalLista(false) }), _jsx(ModalTask, { open: openModalTask, handleClose: () => setOpenModalTask(false) })] }));
}
