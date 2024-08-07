import { Spin } from 'antd';

import './loader.css';

function Loader({ fullscreen }) {
  return <Spin size="large" fullscreen={!!fullscreen} />;
}

export default Loader;
