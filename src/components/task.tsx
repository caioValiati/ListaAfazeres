import { Flex, Radio } from "antd";
import { ITarefa, ITarefaUrgente } from "../../data/interfaces/tarefa";
import { MdEditSquare } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import styles from "./styles.module.scss";

export const Task = ({
  task,
  handleChangeCheck,
}: {
  task: ITarefaUrgente | ITarefa;
  handleChangeCheck: (task: ITarefaUrgente | ITarefa) => void;
}) => {
  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 1:
        return "green";
      case 2:
        return "orange";
      case 3:
        return "red";
    }
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
            <h4>{task.descricao}</h4>
            <Flex align="center" gap={8}>
              <p>Prioridade: </p>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: getPriorityColor(task.prioridade),
                }}
              ></div>
            </Flex>
          </div>
          <Flex gap={12} align="center">
            <MdEditSquare size={`1rem`} />
            <IoMdTrash size={`1rem`} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
