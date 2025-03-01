import { useQuery } from "@tanstack/react-query";
import { Delivery } from "../types";
import { fetchWithAuth } from "../../../client/axios";

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
