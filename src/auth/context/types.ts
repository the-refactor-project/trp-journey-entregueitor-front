import { Id } from "../../types";
import { Role } from "../types";

export interface AuthGetInfoContextValue {
  hasFinishedChecking: boolean;
  studentId: Id;
  isLoggedIn: boolean;
  username: string;
  userMaxWeek: number;
  role: Role;
}

export interface AuthSetInfoContextValue {
  login: () => void;
  logout: () => void;
  setStudentId: (studentId: Id) => void;
}
