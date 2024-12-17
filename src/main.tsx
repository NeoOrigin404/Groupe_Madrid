import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Import de composants */
import App from "./App.tsx";
import Footer from "./components/footer.tsx";

/* Import des CSS */
import "./styles/footer.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Erreur");
}

createRoot(root).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
);
