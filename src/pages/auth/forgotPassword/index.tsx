import { useState } from "react";
import { Button, Steps, Result } from "antd";
import styles from "./styles.module.scss";
import { RenderEmailChangeModal } from "./components/emailChangeModal";
import { RenderEmailConfirmationStep } from "./components/emailConfirmation";
import { RenderCodeVerificationStep } from "./components/codeVerification";
import { RenderNewPasswordStep } from "./components/newPassword";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState("usuario@exemplo.com");
  const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);

  const goToLogin = () => {
    navigate("/login");
  };

  const renderSuccessStep = () => (
    <Result
      status="success"
      title="Senha redefinida com sucesso!"
      subTitle="Sua senha foi alterada. Agora você pode fazer login com sua nova senha."
      extra={[
        <Button
          type="primary"
          key="login"
          onClick={goToLogin}
          style={{ height: 56 }}
          block
        >
          Ir para o login
        </Button>,
      ]}
    />
  );

  const stepsProps = {
    email: email,
    setCurrentStep: setCurrentStep,
  };

  const steps = [
    {
      title: "Email",
      content: (
        <RenderEmailConfirmationStep
          {...stepsProps}
          setIsEmailModalVisible={setIsEmailModalVisible}
        />
      ),
    },
    {
      title: "Código",
      content: <RenderCodeVerificationStep {...stepsProps} />,
    },
    {
      title: "Nova senha",
      content: <RenderNewPasswordStep setCurrentStep={setCurrentStep} />,
    },
    { title: "Concluído", content: renderSuccessStep() },
  ];

  return (
    <div className={styles.forgotContainer}>
      <div>
        <div className={styles.titleContainer}>
          <h1>Recuperar senha</h1>
          <p>Vamos ajudá-lo a redefinir sua senha</p>
        </div>

        <Steps
          current={currentStep}
          items={steps.map((item) => ({ title: item.title }))}
          className={styles.steps}
        />

        <div className={styles.stepContent}>{steps[currentStep].content}</div>

        <RenderEmailChangeModal
          email={email}
          visible={isEmailModalVisible}
          setVisible={setIsEmailModalVisible}
          setNewEmail={setEmail}
        />
      </div>
    </div>
  );
}
