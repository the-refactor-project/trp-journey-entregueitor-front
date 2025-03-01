import { useContext } from "react";
import StudentsContext from "./StudentsContext";

const useStudentsContext = () => {
  const context = useContext(StudentsContext);

  if (!context) {
    throw new Error("StudentsContext must be inside a provider");
  }

  return context;
};

export default useStudentsContext;
