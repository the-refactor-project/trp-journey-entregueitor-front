import useStudentsContext from "../../entities/student/context/useStudentsContext";
import Layout from "../Layout/Layout";
import useStudentsQuery from "../../entities/student/queries/useStudentsQuery";
import { useEffect } from "react";

const App: React.FC = () => {
  const { loadStudents } = useStudentsContext();
  const { data } = useStudentsQuery();

  useEffect(() => {
    if (data) {
      loadStudents(data);
    }
  }, [data, loadStudents]);

  return <Layout />;
};

export default App;
