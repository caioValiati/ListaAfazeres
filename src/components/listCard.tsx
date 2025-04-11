import { Flex } from "antd";
import { TasksProgress } from "./tasksProgress";
import { MdEditSquare } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { Task } from "./task";
import { ILista } from "../../data/interfaces/lista";
import { ITarefa } from "../../data/interfaces/tarefa";
import styles from "./styles.module.scss";

export const ListCard = ({ lista }: { lista: ILista }) => {
  const handleChangeCheck = (task: ITarefa) => {
    console.log(task);
  };

  return (
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
            <Task
              key={task.id}
              task={task}
              handleChangeCheck={handleChangeCheck}
            />
          ))}
        </Flex>
      </div>
      <Flex
        className={styles.listaFooter}
        justify="space-between"
        align="center"
      >
        <TasksProgress
          totalQnt={lista.qntdTarefas}
          concluidasQnt={lista.qntdConcluidas}
        />
        <Flex align="center" gap={12}>
          <MdEditSquare size={`1.4rem`} />
          <IoMdTrash size={`1.4rem`} />
        </Flex>
      </Flex>
    </div>
  );
};
