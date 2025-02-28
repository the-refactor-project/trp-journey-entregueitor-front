import { createContext } from "react";
import { AuthSetInfoContextValue } from "./types";

const AuthSetInfoContext = createContext<AuthSetInfoContextValue | null>(null);
AuthSetInfoContext.displayName = "AuthSetInfoContext";

export default AuthSetInfoContext;
