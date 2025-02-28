import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import DeliveriesPage from "../delivery/pages/DeliveriesPage/DeliveriesPage";
import LoginPage from "../auth/pages/LoginPage/LoginPage";
import AuthPreventGuard from "../auth/components/AuthPreventGuard/AuthPreventGuard";
import AuthAllowGuard from "../auth/components/AuthAllowGuard/AuthAllowGuard";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/deliveries" />} />
        <Route
          path="login"
          element={
            <AuthPreventGuard>
              <LoginPage />
            </AuthPreventGuard>
          }
        />
        <Route
          path="deliveries"
          element={
            <AuthAllowGuard>
              <DeliveriesPage />
            </AuthAllowGuard>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
