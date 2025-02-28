import { useContext } from "react";
import AuthGetInfoContext from "./AuthGetInfoContext";

const useAuthGetInfoContext = () => {
  const context = useContext(AuthGetInfoContext);

  if (!context) {
    throw new Error("Missing provider for this context");
  }

  return context;
};

export default useAuthGetInfoContext;
