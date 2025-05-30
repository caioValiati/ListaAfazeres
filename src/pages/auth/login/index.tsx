import { useState } from "react";
import { Form, Input, Button, Divider, Flex } from "antd";
import styles from "./styles.module.scss";
import {login} from "../../../../data/services/AuthService"
import { ILoginPost } from "../../../../data/interfaces/loginPost";
import { useAppContext } from "../..";
import axios from "axios";

export default function Login() {
  const { MessageNotification } = useAppContext();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ILoginPost) => {
    setLoading(true);
    try {
      const res = await login(values)
      localStorage.setItem("auth", JSON.stringify(res.data))
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      window.location.href = "/";
    } catch (e) {
      MessageNotification(
        {
          text: e.response.data.message, 
          popupType: "message", 
          messageType: "error"
        }
      )
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.backdrop}>
        <div></div>
      </div>
      <div>
        <div className={styles.titleContainer}>
          <h1>Entrar no To-Do</h1>
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
            name="email"
            rules={[
              { required: true, message: "Por favor, insira seu e-mail!" },
              { type: "email", message: "E-mail inválido!" },
            ]}
          >
            <Input variant="underlined" placeholder="E-mail" />
          </Form.Item>

          <Form.Item
            name="senha"
            rules={[
              { required: true, message: "Por favor, insira sua senha!" },
            ]}
          >
            <Input.Password placeholder="Senha" variant="underlined" />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ height: 56 }}
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
              Entrar
            </Button>
          </Form.Item>

          <Form.Item>
            <div className={styles.forgotPasswordContainer}>
              <a href="/forgotPassword">Esqueceu sua senha?</a>
            </div>
          </Form.Item>

          <Divider />

          <div>
            <Flex justify="space-between" align="center">
              <p>Não tem uma conta?</p>
              <Button type="link" href="/signup">
                Crie agora
              </Button>
            </Flex>
          </div>
        </Form>
      </div>
    </div>
  );
}
