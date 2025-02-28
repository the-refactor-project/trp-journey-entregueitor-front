import { Role } from "../types";

export interface AuthGetInfoContextValue {
  hasFinishedChecking: boolean;
  isLoggedIn: boolean;
  username: string;
  userMaxWeek: number;
  role: Role;
}

export interface AuthSetInfoContextValue {
  login: () => void;
  logout: () => void;
}
