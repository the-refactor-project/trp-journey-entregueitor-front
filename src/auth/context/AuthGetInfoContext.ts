import { createContext } from "react";
import { AuthGetInfoContextValue } from "./types";

const AuthGetInfoContext = createContext<AuthGetInfoContextValue | null>(null);
AuthGetInfoContext.displayName = "AuthGetInfoContext";

export default AuthGetInfoContext;
