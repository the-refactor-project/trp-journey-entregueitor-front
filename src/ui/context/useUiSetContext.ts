import { useContext } from "react";
import UiSetContext from "./UiSetContext";

const useSetUiContext = () => {
  const context = useContext(UiSetContext);

  if (!context) {
    throw new Error("UiSetContext should be inside a provider");
  }

  return context;
};

export default useSetUiContext;
