import { jsx as _jsx } from "react/jsx-runtime";
import { Empty } from "antd";
import React, { isValidElement } from "react";
import { LuInbox } from "react-icons/lu";
export const CustomEmpty = ({ description, icon = _jsx(LuInbox, {}), }) => {
    var _a, _b;
    const defaultIconProps = {
        size: "2rem",
        color: "var(--light-2)",
    };
    const iconWithDefaults = isValidElement(icon)
        ? React.cloneElement(icon, {
            size: (_a = icon.props.size) !== null && _a !== void 0 ? _a : defaultIconProps.size,
            color: (_b = icon.props.color) !== null && _b !== void 0 ? _b : defaultIconProps.color,
        })
        : icon;
    return (_jsx(Empty, { description: description, image: iconWithDefaults, styles: {
            description: { color: "var(--light-2)" },
            image: { height: "fit-content" },
        } }));
};
