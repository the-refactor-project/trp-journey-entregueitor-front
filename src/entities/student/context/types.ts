import { Student } from "../types";

export interface StudentsContextValue {
  students: Student[];
  loadStudents: (students: Student[]) => void;
}
