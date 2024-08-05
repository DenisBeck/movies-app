import { Alert } from "antd";

import './error.css';

function Error({ message }) {
  return (
    <Alert 
      className="alert"
      message={message} 
      type='error' 
    />
  )
}

export default Error;