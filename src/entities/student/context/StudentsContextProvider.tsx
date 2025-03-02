import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import StudentsContext from "./StudentsContext";
import { StudentsContextValue } from "./types";
import { Student } from "../types";
import useAuthGetInfoContext from "../../../auth/context/useAuthGetInfoContext";
import useAuthSetInfoContext from "../../../auth/context/useAuthSetInfoContext";

const StudentsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const { username } = useAuthGetInfoContext();
  const { setStudentId } = useAuthSetInfoContext();

  const loadStudents = useCallback(
    (students: Student[]) => {
      setStudents(students);

      const user = students.find((student) => student.username === username);

      if (user) {
        console.log(user);
        setStudentId(user.id);
      }
    },
    [setStudentId, username]
  );

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
