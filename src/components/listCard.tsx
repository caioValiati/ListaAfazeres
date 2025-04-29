import { Flex } from "antd";
import { TasksProgress } from "./tasksProgress";
import { MdEditSquare } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { Task } from "./task";
import { ILista } from "../../data/interfaces/lista";
import { ITarefa } from "../../data/interfaces/tarefa";
import styles from "./styles.module.scss";
import { CustomEmpty } from "./empty";

export const ListCard = ({ lista }: { lista: ILista }) => {
  const handleChangeCheck = (task: ITarefa) => {
    console.log(task);
  };

  const cor = lista.cor ?? '#FAFAFA'
  const qntdTarefas = lista.tarefas.length;
  const qntdConcluidas = lista.tarefas.filter((t) => t.concluida).length 

  return (
    <div
      key={lista.id}
      className={styles.listCard}
      style={{
        background: `linear-gradient(190deg, rgba(2,0,36,0) 50%, ${cor}30 90%)`,
      }}
    >
      <h3>{lista.titulo}</h3>
      <div className={styles.listCardContent}>
        <div className={styles.backdrop}>
          <div style={{ background: cor + "30" }}></div>
          <span
            style={{
              border: "30px solid " + cor + "41",
            }}
          ></span>
        </div>
        <Flex vertical gap={".6rem"}>
          {qntdTarefas > 0 
            ? lista.tarefas.map((task) => (
              <Task
                key={task.id}
                task={task}
                handleChangeCheck={handleChangeCheck}
              />
            )) 
            : <CustomEmpty description="AInda não existem tarefas nesta lista" />}
        </Flex>
      </div>
      <Flex
        className={styles.listaFooter}
        justify="space-between"
        align="center"
      >
        <TasksProgress
          totalQnt={qntdTarefas}
          concluidasQnt={qntdConcluidas}
        />
        <Flex align="center" gap={12}>
          <MdEditSquare size={`1.4rem`} />
          <IoMdTrash size={`1.4rem`} />
        </Flex>
      </Flex>
    </div>
  );
};
