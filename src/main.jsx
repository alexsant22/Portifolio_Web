import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { registerVisit } from "./utils/visitCounter.js";
import "./styles/style.css";

// Fora de componente para contar uma vez por carregamento
registerVisit();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
