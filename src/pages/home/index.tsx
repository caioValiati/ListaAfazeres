import { useState } from "react";
import { Button, Divider, Flex, Progress, Radio } from "antd";
import styles from "./styles.module.scss";
import { IoMdTrash } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import { Listas, TarefasUrgentes } from "../../../data/services/db";
import { ITarefa, ITarefaUrgente } from "../../../data/interfaces/tarefa";
import { useTheme } from "../../theme/themeContext";

export default function Home() {
  const { toggleTheme, themeName } = useTheme();

  const [tasks, setTasks] = useState<ITarefaUrgente[] | ITarefa[]>(
    TarefasUrgentes
  );

  function Task({ task }: { task: ITarefaUrgente | ITarefa }) {
    const handleChangeCheck = (task: ITarefaUrgente | ITarefa) => {
      task.concluida = !task.concluida;
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? task : t))
      );
    };

    return (
      <div className={styles.taskCard}>
        <Flex>
          <Radio
            checked={task.concluida}
            onClick={() => handleChangeCheck(task)}
            className={styles.radio}
          />
          <Flex
            justify="space-between"
            align="center"
            className={styles.taskCardContent}
          >
            <div className={styles.taskCardHeader}>
              <h3>{task.descricao}</h3>
              <p>Prioridade: {task.prioridade}</p>
            </div>
            <Flex gap={12} align="center">
              <MdEditSquare size={`1rem`} />
              <IoMdTrash size={`1rem`} />
            </Flex>
          </Flex>
        </Flex>
      </div>
    );
  }

  const TasksProgress = ({
    totalQnt,
    concluidasQnt,
    thickness = 8,
  }: {
    totalQnt: number;
    concluidasQnt: number;
    thickness?: number;
  }) => {
    return (
      <Flex align="center" gap={12}>
        <Progress
          className={styles.progress}
          strokeWidth={thickness}
          strokeColor={"#BEBEBE"}
          showInfo={false}
          percent={75}
          type="circle"
        />
        <Flex vertical>
          <h4>
            {concluidasQnt}/{totalQnt}
          </h4>
          <p>Completas</p>
        </Flex>
      </Flex>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <Button onClick={toggleTheme}>
        Trocar para tema {themeName === "dark" ? "claro" : "escuro"}
      </Button>
      <Flex className={styles.header} align="end" justify="space-between">
        <div className={styles.headerTitle}>
          <p>Olá, Caio</p>
          <h1>Suas tarefas urgentes</h1>
        </div>
        <TasksProgress totalQnt={4} concluidasQnt={1} />
      </Flex>
      <Flex vertical gap={".6rem"} className={styles.urgentTasksContainer}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </Flex>

      <Divider />

      <div className={styles.header}>
        <h1>Suas listas (2)</h1>
      </div>
      {Listas.map((lista) => (
        <div
          key={lista.id}
          className={styles.listCard}
          style={{
            background: `linear-gradient(190deg, rgba(2,0,36,0) 50%, ${lista.cor}30 90%)`,
          }}
        >
          <h3>{lista.descricao}</h3>
          <div className={styles.listCardContent}>
            <div className={styles.backdrop}>
              <div style={{ background: lista.cor + "30" }}></div>
              <span
                style={{
                  border: "30px solid " + lista.cor + "41",
                }}
              ></span>
            </div>
            <Flex vertical gap={".6rem"}>
              {lista.tarefas.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </Flex>
          </div>
          <Flex
            className={styles.listaFooter}
            justify="space-between"
            align="center"
          >
            <TasksProgress totalQnt={4} concluidasQnt={1} />
            <Flex align="center" gap={12}>
              <MdEditSquare size={`1.4rem`} />
              <IoMdTrash size={`1.4rem`} />
            </Flex>
          </Flex>
        </div>
      ))}
    </div>
  );
}
