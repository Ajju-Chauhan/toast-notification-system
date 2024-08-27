import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

const ToastWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  min-width: 250px;
  max-width: 350px;
  padding: 16px;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  ${(props) => props.position || "top-right"}: 16px;

  &.info {
    background-color: #2b90d9;
  }
  &.success {
    background-color: #28a745;
  }
  &.warning {
    background-color: #ffc107;
  }
  &.error {
    background-color: #dc3545;
  }
`;

const IconWrapper = styled.div`
  margin-right: 12px;
  font-size: 24px;
`;

const ToastMessage = styled.div`
  flex: 1;
  font-size: 16px;
`;

const Toast = ({ type = "info", message = "Default message", position = "top-right", duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle />;
      case "warning":
        return <FaExclamationCircle />;
      case "error":
        return <FaTimesCircle />;
      case "info":
      default:
        return <FaInfoCircle />;
    }
  };

  return (
    <ToastWrapper className={type} position={position}>
      <IconWrapper>{getIcon()}</IconWrapper>
      <ToastMessage>{message}</ToastMessage>
    </ToastWrapper>
  );
};

export default Toast;
