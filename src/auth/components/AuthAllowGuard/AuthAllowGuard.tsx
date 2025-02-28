import { PropsWithChildren, useEffect } from "react";
import useAuthGetInfoContext from "../../context/useAuthGetInfoContext";
import { useNavigate } from "react-router";

const AuthAllowGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn, hasFinishedChecking } = useAuthGetInfoContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (hasFinishedChecking && !isLoggedIn) {
      console.log("FUIG");
      navigate("/login");
    }
  }, [isLoggedIn, hasFinishedChecking, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return children;
};

export default AuthAllowGuard;
