import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Progress } from "antd";
import styles from "./styles.module.scss";
import { useMemo } from "react";
export const TasksProgress = ({ totalQnt, concluidasQnt, thickness = 8, }) => {
    const percent = useMemo(() => (concluidasQnt / totalQnt) * 100, [concluidasQnt, totalQnt]);
    return (_jsxs(Flex, { align: "center", gap: 12, children: [_jsx(Progress, { className: styles.progress, strokeWidth: thickness, strokeColor: "#BEBEBE", showInfo: false, percent: percent, type: "circle" }), _jsxs(Flex, { vertical: true, children: [_jsxs("h4", { children: [concluidasQnt, "/", totalQnt] }), _jsx("p", { children: "Completas" })] })] }));
};
