import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { FlagsmithProvider } from "flagsmith/react";
import flagsmith from "./auth/flagsmith/flagsmith";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./auth/context/AuthContextProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./client/queryClient";
import StudentsContextProvider from "./entities/student/context/StudentsContextProvider";
import "@fontsource-variable/roboto-flex/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FlagsmithProvider flagsmith={flagsmith}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <StudentsContextProvider>
            <AuthContextProvider>
              <AppRouter />
            </AuthContextProvider>
          </StudentsContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </FlagsmithProvider>
  </StrictMode>
);
