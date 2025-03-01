import { createContext } from "react";
import { StudentsContextValue } from "./types";

const StudentsContext = createContext<StudentsContextValue | null>(null);

export default StudentsContext;
