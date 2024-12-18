import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Import de composants */
import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Erreur");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
