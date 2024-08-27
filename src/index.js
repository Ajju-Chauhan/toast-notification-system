// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastProvider } from "./Components/ToastContext/ToastContext";

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById("root")
);
