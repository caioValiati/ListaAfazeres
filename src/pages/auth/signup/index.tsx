import { useState } from "react";
import { Form, Input, Button, Divider, Flex } from "antd";
import styles from "./styles.module.scss";

export default function Signup() {
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Valores recebidos do formulário:", values);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.loginContainer}>
      <div>
        <div className={styles.titleContainer}>
          <h1>Criar Conta</h1>
          <p>Insira os dados da sua conta abaixo</p>
        </div>

        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          layout="vertical"
        >
          <Form.Item
            name="nome"
            rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
          >
            <Input variant="underlined" placeholder="Nome Completo" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Por favor, insira seu e-mail!" },
              { type: "email", message: "E-mail inválido!" },
            ]}
          >
            <Input variant="underlined" placeholder="E-mail" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor, insira sua senha!" },
            ]}
          >
            <Input.Password placeholder="Senha" variant="underlined" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Por favor, confirme sua senha!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("As senhas não conferem!"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Repita sua senha"
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
              Criar
            </Button>
          </Form.Item>

          <Divider />

          <div>
            <Flex justify="space-between" align="center">
              <p>Já tem uma conta?</p>
              <Button type="link" href="/login">
                Entre
              </Button>
            </Flex>
          </div>
        </Form>
      </div>
    </div>
  );
}
