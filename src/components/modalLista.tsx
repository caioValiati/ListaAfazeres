import { Button, ColorPicker, Flex, Form, Input, Modal } from "antd";
import styles from "./styles.module.scss";
import { criarListaTarefa } from "../../data/services/ListaService";
import { Color } from "antd/es/color-picker";

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

  const handlenewList = async(data: {descricao: string, cor: Color | string}) => {
    try {
      data.cor = (data.cor as Color).toHexString();
      const res = await criarListaTarefa(data);
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <Modal
      maskProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.1)" } }}
      title="Criar nova lista"
      open={open}
      onCancel={handleClose}
      className={styles.modalLista}
      classNames={{ header: styles.modalHeader }}
      footer={null}
    >
      <Form onFinish={handlenewList}>
        <Flex gap={16}>
          <Form.Item
            label="Descrição"
            name="titulo"
            rules={[{ required: true, message: "Campo obrigatório" }]}
          >
            <Input placeholder="Descrição" />
          </Form.Item>
          <Form.Item label="Cor" name="cor"  rules={[{ required: true, message: "Obrigatório" }]}>
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
        <Flex justify="end" gap={8}>
          <Button type="text" onClick={handleClose}>Cancelar</Button>
          <Form.Item>
            <Button htmlType="submit" type="primary" >Salvar</Button>
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
};
