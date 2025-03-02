import { createContext } from "react";
import { UiSetContextValue } from "./types";

const UiSetContext = createContext<UiSetContextValue | null>(null);
UiSetContext.displayName = "UiSetContext";

export default UiSetContext;
