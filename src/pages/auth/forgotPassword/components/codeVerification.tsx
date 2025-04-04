import { Button, Flex, Form, Input, message } from "antd";
import { useState } from "react";

export const RenderCodeVerificationStep = ({
  email,
  setCurrentStep,
}: {
  email: string;
  setCurrentStep: (step: number) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [codeForm] = Form.useForm();

  const verifyCode = (values: { code: string }) => {
    setLoading(true);

    console.log("Verificando código:", values.code);
    setTimeout(() => {
      setLoading(false);
      setCurrentStep(2);
      message.success("Código verificado com sucesso!");
    }, 1500);
  };
  return (
    <Form
      form={codeForm}
      name="code_verification_form"
      onFinish={verifyCode}
      size="large"
      layout="vertical"
    >
      <p>Enviamos um código de verificação para {email}</p>

      <Form.Item
        name="code"
        rules={[
          { required: true, message: "Por favor, insira o código recebido!" },
          { len: 6, message: "O código deve ter 6 dígitos!" },
        ]}
      >
        <Input
          variant="underlined"
          placeholder="Código de verificação"
          maxLength={6}
        />
      </Form.Item>

      <Form.Item>
        <Button
          style={{ height: 56 }}
          type="primary"
          htmlType="submit"
          loading={loading}
          block
        >
          Verificar código
        </Button>
      </Form.Item>

      <Flex justify="center">
        <Button
          style={{ fontSize: ".9rem" }}
          type="link"
          onClick={() => {
            setCurrentStep(0);
          }}
        >
          Não recebeu o código? Reenviar
        </Button>
      </Flex>
    </Form>
  );
};
