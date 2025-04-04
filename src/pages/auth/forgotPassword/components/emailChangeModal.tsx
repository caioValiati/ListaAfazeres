import { Button, Form, Input, message, Modal } from "antd";

export const RenderEmailChangeModal = ({
  visible,
  email,
  setVisible,
  setNewEmail,
}: {
  visible: boolean;
  email: string;
  setVisible: (value: boolean) => void;
  setNewEmail: (value: string) => void;
}) => {
  const [emailForm] = Form.useForm();

  const changeEmail = (values: { email: string }) => {
    setNewEmail(values.email);
    setVisible(false);
    message.success("Email atualizado com sucesso!");
  };

  return (
    <Modal
      title="Alterar email"
      open={visible}
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <Form
        form={emailForm}
        name="email_change_form"
        onFinish={changeEmail}
        layout="vertical"
      >
        <Form.Item
          name="email"
          initialValue={email}
          rules={[
            { required: true, message: "Por favor, insira seu e-mail!" },
            { type: "email", message: "E-mail inválido!" },
          ]}
        >
          <Input placeholder="Seu e-mail cadastrado" />
        </Form.Item>

        <Form.Item>
          <Button onClick={() => setVisible(false)} style={{ marginRight: 8 }}>
            Cancelar
          </Button>
          <Button type="primary" htmlType="submit">
            Confirmar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
