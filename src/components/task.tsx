// src/components/task.tsx
import { useState, useCallback } from "react";
import { Flex, Radio, notification } from "antd";
import { ITarefa, ITarefaUrgente } from "../../data/interfaces/tarefa";
import { MdEditSquare } from "react-icons/md";
import styles from "./styles.module.scss";
import { marcarTarefa, desmarcarTarefa } from "../../data/services/TarefaService";
import { useFetchData } from "../pages/home/contexts/fetchDataContext";
import { TaskModal } from "./taskModal";

export const Task = ({
  listId,
  task,
}: {
  listId?: number;
  task: ITarefaUrgente | ITarefa;
}) => {
  const [loading, setLoading] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const { fetchData } = useFetchData();

  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 0:
        return "green";
      case 1:
        return "orange";
      case 2:
        return "red";
      default:
        return "gray";
    }
  };

  const handleToggleConcluida = useCallback(
    async () => {
      setLoading(true);
      try {
        if (!task.completada) {
          await marcarTarefa(task.id);
          notification.success({ message: "Tarefa marcada como concluída." });
        } else {
          await desmarcarTarefa(task.id);
          notification.info({ message: "Tarefa desmarcada." });
        }
        await fetchData();
      } catch (err) {
        notification.error({
          message: "Erro ao atualizar status da tarefa.",
        });
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [fetchData, task]
  );

  return (
    <div className={styles.taskCard}>
      <Flex>
        <Radio
          disabled={loading}
          checked={task.completada}
          className={styles.radio}
          onClick={handleToggleConcluida}
        />
        <Flex
          justify="space-between"
          align="center"
          className={styles.taskCardContent}
        >
          <div className={styles.taskCardHeader}>
            <h4>{task.descricao}</h4>
            <Flex align="center" gap={8}>
              <p>Prioridade:</p>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: getPriorityColor(task.prioridade),
                }}
              />
            </Flex>
          </div>
          <Flex gap={12} align="center">
            <MdEditSquare
              size="1rem"
              style={{ cursor: "pointer" }}
              onClick={() => setIsEditTaskModalVisible(true)}
            />
          </Flex>
        </Flex>
      </Flex>

      <TaskModal
        listaId={listId}
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        editingTask={task}
      />
    </div>
  );
};
