import { ColorPicker, Flex, Form, Input, Modal } from "antd";
import styles from "./styles.module.scss";

export const ModalLista = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const colors = [
    "#FFD700",
    "#FFA500",
    "#FF4500",
    "#DC143C",
    "#FF69B4",
    "#8B008B",
    "#9400D3",
    "#4B0082",
    "#4169E1",
    "#1E90FF",
    "#00BFFF",
    "#ADD8E6",
    "#8FBC8F",
    "#3CB371",
    "#2E8B57",
    "#556B2F",
    "#A0522D",
    "#D2691E",
    "#FF8C00",
    "#FF7F50",
  ];

  return (
    <Modal
      maskProps={{ style: { backgroundColor: "var(--light)", opacity: 0.1 } }}
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
          <Form.Item label="Cor" name="cor">
            <ColorPicker
              presets={[
                {
                  colors: colors,
                  label: "",
                },
              ]}
            />
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
};
