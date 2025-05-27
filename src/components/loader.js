import { jsx as _jsx } from "react/jsx-runtime";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const Loading = ({ loading, size = 48 }) => {
    const spinnerIcon = _jsx(LoadingOutlined, { style: { fontSize: size }, spin: true });
    if (!loading)
        return null;
    return (_jsx("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
        }, children: _jsx(Spin, { indicator: spinnerIcon }) }));
};
export default Loading;
