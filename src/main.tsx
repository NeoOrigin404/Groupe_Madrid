import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/Nav.css";
import Nav from "./Nav.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Erreur");
}

createRoot(root).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>,
);
