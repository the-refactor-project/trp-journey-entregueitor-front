import { createContext } from "react";
import { UiGetContextValue } from "./types";

const UiGetContext = createContext<UiGetContextValue | null>(null);
UiGetContext.displayName = "UiGetContext";

export default UiGetContext;
