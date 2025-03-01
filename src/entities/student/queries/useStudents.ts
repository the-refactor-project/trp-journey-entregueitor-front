import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { Student } from "../types";

const useStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const { data } = await fetchWithAuth<{ students: Student[] }>(
        "/students"
      );

      return data.students;
    },
  });
};

export default useStudents;
