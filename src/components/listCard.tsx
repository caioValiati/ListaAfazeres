import { useState } from 'react';
import { Flex } from "antd";
import { TasksProgress } from "./tasksProgress";
import { Task } from "./task";
import { ILista } from "../../data/interfaces/lista";
import styles from "./styles.module.scss";
import { CustomEmpty } from "./empty";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { excluirLista } from '../../data/services/ListaService';
import { useFetchData } from '../pages/home/contexts/fetchDataContext';
import { useAppContext } from '../pages';
import { TaskModal } from './taskModal';

export const ListCard = ({ lista }: { lista: ILista }) => {  
  const { modal } = useAppContext();
  const { fetchData } = useFetchData();
  const [isAddTaskModalVisible, setIsAddTaskModalVisible] = useState(false);

  const cor = lista.cor ?? 'var(--light)';
  const qntdTarefas = lista.tarefas.length;
  const qntdConcluidas = lista.tarefas.filter((t) => t.completada).length;

  const handleDeleteConfirm = async () => {
    modal.confirm({
      title: "Tem certeza que deseja excluir essa lista?",
      onOk: async() => {
        await excluirLista(lista.id.toString());
        fetchData();
      }
    })
  };

  return (
    <div
      key={lista.id}
      className={styles.listCard}
      style={{
        background: `linear-gradient(190deg, rgba(2,0,36,0) 50%, color-mix(in srgb, ${cor} 30%, transparent) 90%)`,
      }}
    >
      <h3>{lista.titulo}</h3>
      <div className={styles.listCardContent}>
        <div className={styles.backdrop}>
          <div style={{ background: `color-mix(in srgb, ${cor} 30%, transparent)` }}></div>
          <span
            style={{
              border: "30px solid " + `color-mix(in srgb, ${cor} 41%, transparent)`,
            }}
          ></span>
        </div>
        <Flex vertical gap={".6rem"}>
          {qntdTarefas > 0 
            ? lista.tarefas.map((task) => (
              <Task
                listId={lista.id}
                key={task.id}
                task={task}
              />
            )) 
            : <CustomEmpty description="Ainda não existem tarefas nesta lista" />}
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
          <FaPlus
            size={"0.8rem"}
            onClick={() => setIsAddTaskModalVisible(true)}
            style={{ cursor: 'pointer'}}
          />
          <IoIosClose
            size={"1.4rem"}
            onClick={handleDeleteConfirm}
            style={{ cursor: 'pointer' }}
          />
        </Flex>
      </Flex>

      <TaskModal
        listaId={lista.id}
        onClose={() => setIsAddTaskModalVisible(false)}
        visible={isAddTaskModalVisible}
      />
    </div>
  );
};