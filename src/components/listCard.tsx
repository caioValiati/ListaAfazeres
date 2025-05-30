import { useState } from 'react';
import { Flex, Modal, Form, Input, Button, Select } from "antd";
import { TasksProgress } from "./tasksProgress";
import { Task } from "./task";
import { ILista } from "../../data/interfaces/lista";
import { ITarefa } from "../../data/interfaces/tarefa";
import styles from "./styles.module.scss";
import { CustomEmpty } from "./empty";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { criarTarefa } from '../../data/services/TarefaService';
import { excluirLista } from '../../data/services/ListaService';

export const ListCard = ({ lista, fetchData }: { lista: ILista; fetchData: () => void }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isAddTaskModalVisible, setIsAddTaskModalVisible] = useState(false);
  const [newTask, setNewTask] = useState({
    descricao: '',
    prioridade: 1,
    concluida: false,
  });

  const handleChangeCheck = (task: ITarefa) => {
    console.log(task);
  };

  const cor = lista.cor ?? 'var(--light)';
  const qntdTarefas = lista.tarefas.length;
  const qntdConcluidas = lista.tarefas.filter((t) => t.concluida).length;

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    excluirLista(lista.id.toString());
    setIsDeleteModalVisible(false);
    fetchData();
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const showAddTaskModal = () => {
    setIsAddTaskModalVisible(true);
  };

  const handleAddTaskConfirm = () => {
    const tarefa: ITarefa = {
      descricao: newTask.descricao,
      prioridade: newTask.prioridade,
      concluida: newTask.concluida,
    };
    criarTarefa(tarefa, lista.id);
    setIsAddTaskModalVisible(false);
    setNewTask({ descricao: '', prioridade: 1, concluida: false });
    fetchData()
  };

  const handleAddTaskCancel = () => {
    setIsAddTaskModalVisible(false);
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
                key={task.id}
                task={task}
                handleChangeCheck={handleChangeCheck}
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
            onClick={showAddTaskModal}
            style={{ cursor: 'pointer'}}
          />
          <IoIosClose
            size={"1.4rem"}
            onClick={showDeleteModal}
            style={{ cursor: 'pointer' }}
          />
        </Flex>
      </Flex>

      <Modal
        title="Confirmar Exclusão"
        open={isDeleteModalVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        okText="Excluir"
        footer={null}
        cancelText="Cancelar"
      >
        <p>Você tem certeza que deseja excluir esta lista?</p>
        <Flex justify="end" gap={8}>
          <Button type="text" onClick={handleDeleteCancel}>Cancelar</Button>
          <Button type="primary" onClick={handleDeleteConfirm}>Salvar</Button>
        </Flex>
      </Modal>

      <Modal
        title="Adicionar Tarefa"
        open={isAddTaskModalVisible}
        onOk={handleAddTaskConfirm}
        onCancel={handleAddTaskCancel}
        okText="Adicionar"
        footer={null}
        cancelText="Cancelar"
      >
        <Form layout="vertical" onFinish={handleAddTaskConfirm}>
          <Form.Item label="Descrição" required>
            <Input
              value={newTask.descricao}
              onChange={(e) => setNewTask({ ...newTask, descricao: e.target.value })}
              placeholder="Digite a descrição da tarefa"
            />
          </Form.Item>
          <Form.Item label="Prioridade" required>
            <Select 
              placeholder="Escolha a prioridade"
              value={newTask.prioridade}
              options={[{label: "Baixa", value: 0}, {label: "Média", value: 1}, {label: "Alta", value: 2}]}
              onChange={(e) => setNewTask({ ...newTask, prioridade: e })}
            />
          </Form.Item>
          
        <Flex justify="end" gap={8}>
          <Button type="text" onClick={handleAddTaskCancel}>Cancelar</Button>
          <Form.Item>
            <Button htmlType="submit" type="primary" >Salvar</Button>
          </Form.Item>
        </Flex>
        </Form>
      </Modal>
    </div>
  );
};