import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import DeliveriesPage from "../entities/delivery/pages/DeliveriesPage/DeliveriesPage";
import LoginPage from "../auth/pages/LoginPage/LoginPage";
import AuthPreventGuard from "../auth/components/AuthPreventGuard/AuthPreventGuard";
import AuthAllowGuard from "../auth/components/AuthAllowGuard/AuthAllowGuard";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NewDeliveryPage from "../entities/delivery/pages/NewDeliveryPage/NewDeliveryPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/deliveries/week-1" />} />
        <Route
          path="login"
          element={
            <AuthPreventGuard>
              <LoginPage />
            </AuthPreventGuard>
          }
        />
        <Route
          path="deliveries/:week"
          element={
            <AuthAllowGuard>
              <DeliveriesPage />
            </AuthAllowGuard>
          }
        />
        <Route
          path="deliveries/new"
          element={
            <AuthAllowGuard>
              <NewDeliveryPage />
            </AuthAllowGuard>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
