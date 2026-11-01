import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans-bengali";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { LangProvider } from "./context/LangContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <LangProvider>
      <App />
    </LangProvider>
    </BrowserRouter>
  </StrictMode>
);
