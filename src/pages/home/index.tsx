import { useState, useMemo, useEffect } from "react";
import { Divider, Flex } from "antd";
import styles from "./styles.module.scss";
import { Listas, TarefasUrgentes } from "../../../data/services/db";
import { ITarefa, ITarefaUrgente } from "../../../data/interfaces/tarefa";
import { CiCirclePlus } from "react-icons/ci";
import { TasksProgress } from "../../components/tasksProgress";
import { Task } from "../../components/task";
import { ListCard } from "../../components/listCard";
import { ModalLista } from "../../components/modalLista";
import { ModalTask } from "../../components/modalTask";
import { buscarUsuarios } from "../../../data/services/UsuarioService"

export default function Home() {
  const [openModalLista, setOpenModalLista] = useState(false);
  const [openModalTask, setOpenModalTask] = useState(false);
  const [tasks, setTasks] = useState<ITarefaUrgente[] | ITarefa[]>(
    TarefasUrgentes
  );

  const tasksConcluidasLength = useMemo(
    () => tasks.filter((task) => task.concluida).length,
    [tasks]
  );

  const handleChangeCheck = (task: ITarefaUrgente | ITarefa) => {
    task.concluida = !task.concluida;
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? task : t))
    );
  };

  useEffect(() => {
    const teste = async() => {
      const param = {
        id: 0,
        titulo: "teste",
        createdAt: null,
        updatedAt: null,
        tarefas: []
      }
      const res = await buscarUsuarios()
      console.log(res);
    };
    teste();
  }, [])

  return (
    <div className={styles.mainContainer}>
      <Flex className={styles.header} align="end" justify="space-between">
        <div className={styles.headerTitle}>
          <p>Olá, Caio</p>
          <h1>Suas tarefas urgentes</h1>
        </div>
        <TasksProgress
          totalQnt={tasks.length}
          concluidasQnt={tasksConcluidasLength}
        />
      </Flex>
      <Flex vertical gap={".6rem"} className={styles.urgentTasksContainer}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleChangeCheck={handleChangeCheck}
          />
        ))}
      </Flex>

      <Divider />

      <Flex className={styles.header} justify="space-between" align="center">
        <h1>Suas listas (2)</h1>
        <CiCirclePlus
          style={{ cursor: "pointer" }}
          size={28}
          onClick={() => setOpenModalLista(true)}
        />
      </Flex>
      {Listas.map((lista) => (
        <ListCard key={lista.id} lista={lista} />
      ))}
      <ModalLista
        handleClose={() => setOpenModalLista(false)}
        open={openModalLista}
      />
      <ModalTask
        open={openModalTask}
        handleClose={() => setOpenModalTask(false)}
      />
    </div>
  );
}
