import { PropsWithChildren, useEffect } from "react";
import useAuthGetInfoContext from "../../context/useAuthGetInfoContext";
import { useNavigate } from "react-router";

const AuthPreventGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn, hasFinishedChecking } = useAuthGetInfoContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (hasFinishedChecking && isLoggedIn) {
      navigate("/deliveries/challenge-1");
    }
  }, [isLoggedIn, hasFinishedChecking, navigate]);

  if (isLoggedIn) {
    return null;
  }

  return children;
};

export default AuthPreventGuard;
