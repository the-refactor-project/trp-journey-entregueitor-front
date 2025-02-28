import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { FlagsmithProvider } from "flagsmith/react";
import flagsmith from "./auth/flagsmith/flagsmith";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./auth/context/AuthContextProvider";
import "@fontsource-variable/roboto-flex/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FlagsmithProvider flagsmith={flagsmith}>
      <BrowserRouter>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </BrowserRouter>
    </FlagsmithProvider>
  </StrictMode>
);
