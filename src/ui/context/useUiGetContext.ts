import { useContext } from "react";
import UiGetContext from "./UiGetContext";

const useGetUiContext = () => {
  const context = useContext(UiGetContext);

  if (!context) {
    throw new Error("UiGetContext should be inside a provider");
  }

  return context;
};

export default useGetUiContext;
