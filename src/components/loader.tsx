import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = ({ loading, size = 48 }: { loading: boolean, size: number }) => {
  const spinnerIcon = <LoadingOutlined style={{ fontSize: size }} spin />;

  if (!loading) return null;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10vh',
    }}>
      <Spin indicator={spinnerIcon} />
    </div>
  );
};

export default Loading;
