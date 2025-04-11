import { Flex, Progress } from "antd";
import styles from "./styles.module.scss";
import { useMemo } from "react";

export const TasksProgress = ({
  totalQnt,
  concluidasQnt,
  thickness = 8,
}: {
  totalQnt: number;
  concluidasQnt: number;
  thickness?: number;
}) => {
  const percent = useMemo(
    () => (concluidasQnt / totalQnt) * 100,
    [concluidasQnt, totalQnt]
  );

  return (
    <Flex align="center" gap={12}>
      <Progress
        className={styles.progress}
        strokeWidth={thickness}
        strokeColor={"#BEBEBE"}
        showInfo={false}
        percent={percent}
        type="circle"
      />
      <Flex vertical>
        <h4>
          {concluidasQnt}/{totalQnt}
        </h4>
        <p>Completas</p>
      </Flex>
    </Flex>
  );
};
