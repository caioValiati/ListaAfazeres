// src/components/TaskModal.tsx
import { useEffect } from "react";
import { Modal, Form, Input, Select, notification } from "antd";
import { useFetchData } from "../pages/home/contexts/fetchDataContext";
import { ITarefa } from "../../data/interfaces/tarefa";
import { criarTarefa, editarTarefa } from "../../data/services/TarefaService";

interface TaskModalProps {
  visible: boolean;
  onClose: () => void;
  listaId: number;
  editingTask?: ITarefa | null;
}

export function TaskModal({
  visible,
  onClose,
  listaId,
  editingTask = null,
}: TaskModalProps) {
  const [form] = Form.useForm<Partial<ITarefa>>();
  const { fetchData } = useFetchData();

  useEffect(() => {
    if (visible) {
      if (editingTask) {
        form.setFieldsValue({
          descricao: editingTask.descricao,
          prioridade: editingTask.prioridade,
          concluida: editingTask.concluida,
        });
      } else {
        form.resetFields();
      }
    }
  }, [visible, editingTask, form]);

  const isCreateMode = !editingTask;

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (isCreateMode) {
        await criarTarefa(
          {
            descricao: values.descricao!.trim(),
            prioridade: values.prioridade!,
            concluida: values.concluida ?? false,
          },
          listaId
        );
        notification.success({ message: "Tarefa criada com sucesso!" });
      } else {
        await editarTarefa({
          id: editingTask.id,
          descricao: values.descricao!.trim(),
          prioridade: values.prioridade!,
          concluida: values.concluida ?? false,
        });
        notification.success({ message: "Tarefa atualizada com sucesso!" });
      }

      await fetchData();
      form.resetFields();
      onClose();
    } catch (err) {
      if (err.response?.data?.message) {
        notification.error({ message: err.response.data.message });
      } else {
        notification.error({ message: "Erro ao salvar a tarefa." });
        console.error(err);
      }
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={isCreateMode ? "Adicionar Tarefa" : "Editar Tarefa"}
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={isCreateMode ? "Adicionar" : "Salvar"}
      cancelButtonProps={{type: "text"}}
      cancelText="Cancelar"
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="descricao"
          label="Descrição"
          rules={[
            { required: true, message: "Informe a descrição da tarefa" },
            { min: 3, message: "A descrição deve ter pelo menos 3 caracteres" },
          ]}
        >
          <Input placeholder="Digite a descrição da tarefa" />
        </Form.Item>

        <Form.Item
          name="prioridade"
          label="Prioridade"
          rules={[{ required: true, message: "Escolha a prioridade" }]}
        >
          <Select
            placeholder="Escolha a prioridade"
            options={[
              { label: "Baixa", value: 0 },
              { label: "Média", value: 1 },
              { label: "Alta", value: 2 },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
