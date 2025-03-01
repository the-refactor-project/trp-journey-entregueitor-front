import useStudentsContext from "../../entities/student/context/useStudentsContext";
import Layout from "../Layout/Layout";
import useStudents from "../../entities/student/queries/useStudents";
import { useEffect } from "react";

const App: React.FC = () => {
  const { loadStudents } = useStudentsContext();
  const { data } = useStudents();

  useEffect(() => {
    if (data) {
      loadStudents(data);
    }
  }, [data, loadStudents]);

  return <Layout />;
};

export default App;
