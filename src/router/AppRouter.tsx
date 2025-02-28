import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import DeliveriesPage from "../delivery/pages/DeliveriesPage/DeliveriesPage";
import LoginPage from "../auth/pages/LoginPage/LoginPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/deliveries" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="deliveries" element={<DeliveriesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
