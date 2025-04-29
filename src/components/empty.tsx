import { Empty } from "antd";
import React, { ReactNode, isValidElement } from "react";
import { LuInbox } from "react-icons/lu";
import { IconBaseProps } from "react-icons";

type CustomEmptyProps = {
  description: string;
  icon?: ReactNode;
};

export const CustomEmpty = ({
  description,
  icon = <LuInbox />,
}: CustomEmptyProps) => {
  const defaultIconProps: IconBaseProps = {
    size: "2rem",
    color: "var(--light-2)",
  };

  const iconWithDefaults = isValidElement<IconBaseProps>(icon)
    ? React.cloneElement(icon, {
        size: icon.props.size ?? defaultIconProps.size,
        color: icon.props.color ?? defaultIconProps.color,
      })
    : icon;

  return (
    <Empty
      description={description}
      image={iconWithDefaults}
      styles={{
        description: { color: "var(--light-2)" },
        image: { height: "fit-content" },
      }}
    />
  );
};
