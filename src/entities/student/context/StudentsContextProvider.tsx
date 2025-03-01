import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import StudentsContext from "./StudentsContext";
import { StudentsContextValue } from "./types";
import { Student } from "../types";

const StudentsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const loadStudents = useCallback((students: Student[]) => {
    setStudents(students);
  }, []);

  const studentsContextValue: StudentsContextValue = useMemo(
    () => ({
      students,
      loadStudents,
    }),
    [students, loadStudents]
  );

  return (
    <StudentsContext.Provider value={studentsContextValue}>
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContextProvider;
