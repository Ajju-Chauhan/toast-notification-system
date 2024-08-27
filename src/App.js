import React from "react";
import { useToast } from "./Components/ToastContext/ToastContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const Button = styled.button`
  margin: 8px;
  padding: 12px 24px;
  font-size: 16px;
  width: 250px;
  font-weight: bold;
  color: #fff;
  background-color: #4b5e72;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a4a59; 
  }

  &:active {
    background-color: #2e3a47; 
  }
`;

function App() {
  const addToast = useToast();

  const handleShowToast = (type) => {
    addToast(type, `${type.charAt(0).toUpperCase() + type.slice(1)} message`, "top-right", 3000);
    console.log(type)
  };

  return (
    <Container>
      <H1>toast notification system</H1>
      <Button onClick={() => handleShowToast("info")}>Show Info Toast</Button>
      <Button onClick={() => handleShowToast("success")}>Show Success Toast</Button>
      <Button onClick={() => handleShowToast("warning")}>Show Warning Toast</Button>
      <Button onClick={() => handleShowToast("error")}>Show Error Toast</Button>
    </Container>
  );
}

export default App;
