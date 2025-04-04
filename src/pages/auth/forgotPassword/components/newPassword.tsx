import { Button, Form, Input } from "antd";
import { useState } from "react";
import styles from "../styles.module.scss";

export const RenderNewPasswordStep = ({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [passwordForm] = Form.useForm();

  const resetPassword = (values: { newPassword: string }) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log(values);
      setCurrentStep(3);
    }, 1500);
  };

  return (
    <Form
      form={passwordForm}
      name="reset_password_form"
      onFinish={resetPassword}
      size="large"
      layout="vertical"
    >
      <p>Agora você pode definir uma nova senha para sua conta</p>

      <Form.Item
        name="newPassword"
        rules={[
          { required: true, message: "Por favor, insira sua nova senha!" },
          { min: 6, message: "A senha deve ter pelo menos 6 caracteres!" },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Nova senha" variant="underlined" />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        dependencies={["newPassword"]}
        hasFeedback
        rules={[
          { required: true, message: "Por favor, confirme sua nova senha!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("As senhas não conferem!"));
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Repita sua nova senha"
          variant="underlined"
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
          Redefinir senha
        </Button>
      </Form.Item>
    </Form>
  );
};
