import { Flex, Form, Input, Modal, Select } from "antd";
import styles from "./styles.module.scss";

export const ModalTask = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Modal
      maskProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.1)" } }}
      title="Criar nova lista"
      open={open}
      onCancel={handleClose}
      className={styles.modalLista}
      classNames={{ header: styles.modalHeader }}
      cancelButtonProps={{ type: "text" }}
    >
      <Form>
        <Flex gap={16}>
          <Form.Item
            label="Descrição"
            name="descricao"
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Descrição" />
          </Form.Item>
          <Form.Item label="Prioridade" name="prioridade">
            <Select
              defaultValue="normal"
              options={[
                { value: "normal", label: "Normal" },
                { value: "alta", label: "Alta" },
                { value: "urgente", label: "Urgente" },
              ]}
            />
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
};
