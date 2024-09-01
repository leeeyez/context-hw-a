import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PartProvider } from "./contexts/PartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PartProvider>
);
