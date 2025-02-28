import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "../../client/axios";
import { Delivery } from "../types";

const useDeliveries = (weekNumber: number) => {
  return useQuery({
    queryKey: ["deliveries", weekNumber],
    queryFn: async () => {
      const { data } = await fetchWithAuth<{ deliveries: Delivery[] }>(
        "/deliveries/" + weekNumber
      );

      return data.deliveries;
    },
  });
};

export default useDeliveries;
