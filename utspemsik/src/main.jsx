// src/main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Pastikan Tailwind CSS sudah di-import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
