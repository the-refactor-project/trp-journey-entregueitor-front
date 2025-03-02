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
import UiContextProvider from "./ui/context/UiContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FlagsmithProvider flagsmith={flagsmith}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthContextProvider>
            <StudentsContextProvider>
              <UiContextProvider>
                <AppRouter />
              </UiContextProvider>
            </StudentsContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </FlagsmithProvider>
  </StrictMode>
);
