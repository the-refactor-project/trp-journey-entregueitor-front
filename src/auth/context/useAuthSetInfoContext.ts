import { useContext } from "react";
import AuthSetInfoContext from "./AuthSetInfoContext";

const useAuthSetInfoContext = () => {
  const context = useContext(AuthSetInfoContext);

  if (!context) {
    throw new Error("Missing provider for this context");
  }

  return context;
};

export default useAuthSetInfoContext;
