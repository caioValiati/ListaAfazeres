import { useState, useMemo, useEffect, useCallback } from "react";
import { Divider, Flex } from "antd";
import { CiCirclePlus } from "react-icons/ci";

import styles from "./styles.module.scss";

import { buscarTarefas } from "../../../data/services/TarefaService";
import { buscarListas } from "../../../data/services/ListaService";
import { ITarefa, ITarefaUrgente } from "../../../data/interfaces/tarefa";
import { ILista } from "../../../data/interfaces/lista";

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
  const [tasks, setTasks] = useState<(ITarefa | ITarefaUrgente)[]>([]);
  const [listas, setListas] = useState<ILista[]>([]);
  const [loading, setLoading] = useState(false);

  const tarefasConcluidas = useMemo(
    () => tasks.filter((t) => t.concluida).length,
    [tasks]
  );

  const toggleTaskConcluida = useCallback((task: ITarefa | ITarefaUrgente) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, concluida: !t.concluida } : t
      )
    );
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
    } catch (error) {
      console.error("Erro ao carregar dados da Home:", error);
      setTasks([]);
      setListas([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.mainContainer}>
      <Flex className={styles.header} align="end" justify="space-between">
        <div className={styles.headerTitle}>
          <p>Olá, Caio</p>
          <h1>Suas tarefas urgentes</h1>
        </div>
        <TasksProgress
          totalQnt={tasks.length}
          concluidasQnt={tarefasConcluidas}
        />
      </Flex>

      <Flex vertical gap="0.6rem" className={styles.urgentTasksContainer}>
        {loading ? (
          <Loading loading={true} size={48} />
        ) : tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleChangeCheck={toggleTaskConcluida}
            />
          ))
        ) : (
          <div style={{ marginTop: "1rem" }}>
            <CustomEmpty
              description="Sem tarefas urgentes por enquanto."
              icon={<FiCoffee />}
            />
          </div>
        )}
      </Flex>

      <Divider />

      <Flex className={styles.header} justify="space-between" align="center">
        <h1>Suas listas ({listas.length})</h1>
        <CiCirclePlus
          style={{ cursor: "pointer" }}
          size={28}
          onClick={() => setOpenModalLista(true)}
        />
      </Flex>

      {loading ? (
        <Loading loading={true} size={40} />
      ) : listas.length > 0 ? (
        listas.map((lista) => <ListCard key={lista.id} lista={lista} />)
      ) : (
        <CustomEmpty description="Você ainda não tem listas." />
      )}

      <ModalLista
        open={openModalLista}
        handleClose={() => setOpenModalLista(false)}
      />
      <ModalTask
        open={openModalTask}
        handleClose={() => setOpenModalTask(false)}
      />
    </div>
  );
}
