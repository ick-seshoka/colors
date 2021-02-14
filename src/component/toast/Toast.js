import React from "react";
import PropTypes from "prop-types";

import { Container, ToastSource } from "./styles";

const Toast = ({ show, children }) => {
  const toastContent = children;
  return (
    <Container show={show}>
      <ToastSource>{toastContent}</ToastSource>
    </Container>
  );
};

Toast.propTypes = {
  Content: PropTypes.any,
  show: PropTypes.bool,
};

export default Toast;
