import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<Navigate to="/deliveries" />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
