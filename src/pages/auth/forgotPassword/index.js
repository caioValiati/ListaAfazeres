import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const renderSuccessStep = () => (_jsx(Result, { status: "success", title: "Senha redefinida com sucesso!", subTitle: "Sua senha foi alterada. Agora voc\u00EA pode fazer login com sua nova senha.", extra: [
            _jsx(Button, { type: "primary", onClick: goToLogin, style: { height: 56 }, block: true, children: "Ir para o login" }, "login"),
        ] }));
    const stepsProps = {
        email: email,
        setCurrentStep: setCurrentStep,
    };
    const steps = [
        {
            title: "Email",
            content: (_jsx(RenderEmailConfirmationStep, { ...stepsProps, setIsEmailModalVisible: setIsEmailModalVisible })),
        },
        {
            title: "Código",
            content: _jsx(RenderCodeVerificationStep, { ...stepsProps }),
        },
        {
            title: "Nova senha",
            content: _jsx(RenderNewPasswordStep, { setCurrentStep: setCurrentStep }),
        },
        { title: "Concluído", content: renderSuccessStep() },
    ];
    return (_jsx("div", { className: styles.forgotContainer, children: _jsxs("div", { children: [_jsxs("div", { className: styles.titleContainer, children: [_jsx("h1", { children: "Recuperar senha" }), _jsx("p", { children: "Vamos ajud\u00E1-lo a redefinir sua senha" })] }), _jsx(Steps, { current: currentStep, items: steps.map((item) => ({ title: item.title })), className: styles.steps }), _jsx("div", { className: styles.stepContent, children: steps[currentStep].content }), _jsx(RenderEmailChangeModal, { email: email, visible: isEmailModalVisible, setVisible: setIsEmailModalVisible, setNewEmail: setEmail })] }) }));
}
