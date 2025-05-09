import { useState, useMemo } from "react";
import { Divider, Empty, Flex } from "antd";
import styles from "./styles.module.scss";
import { Listas, TarefasUrgentes } from "../../../data/services/db";
import { ITarefa, ITarefaUrgente } from "../../../data/interfaces/tarefa";
import { CiCirclePlus } from "react-icons/ci";
import { TasksProgress } from "../../components/tasksProgress";
import { Task } from "../../components/task";
import { ListCard } from "../../components/listCard";
import { ModalLista } from "../../components/modalLista";
import { ModalTask } from "../../components/modalTask";
import { TbDatabaseOff } from "react-icons/tb";

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
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleChangeCheck={handleChangeCheck}
            />
          ))
        ) : (
          <Empty
            image={<TbDatabaseOff size={32} />}
            description={"Você ainda não possui afazeres registrados"}
          />
        )}
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
