import { Button, Flex, Form, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";

export const RenderEmailConfirmationStep = ({
  email,
  setIsEmailModalVisible,
  setCurrentStep,
}: {
  email: string;
  setCurrentStep: (step: number) => void;
  setIsEmailModalVisible: (visible: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const requestResetCode = () => {
    setLoading(true);

    console.log("Enviando código para:", email);
    setTimeout(() => {
      setLoading(false);
      setCurrentStep(1);
      message.success(`Código enviado para ${email}`);
    }, 1500);
  };
  return (
    <div>
      <p>Enviaremos um código de verificação para:</p>

      <Flex align="center">
        <p>{email}</p>
        <Button
          style={{ color: "#FFF" }}
          type="text"
          icon={<EditOutlined />}
          onClick={() => setIsEmailModalVisible(true)}
        />
      </Flex>

      <p>
        Por favor, verifique se você tem acesso a este email antes de
        prosseguir.
      </p>

      <Form.Item>
        <Button
          style={{ height: 56, marginTop: 16 }}
          type="primary"
          onClick={requestResetCode}
          loading={loading}
          block
        >
          Enviar código
        </Button>
      </Form.Item>

      <div>
        <Button type="link" href="/login">
          Voltar para o login
        </Button>
      </div>
    </div>
  );
};
