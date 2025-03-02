import { useMutation } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import queryClient from "../../../client/queryClient";
import { Id } from "../../../types";

const useDeleteDeliveryMutation = (week: number) => {
  return useMutation({
    mutationFn: async (deliveryId: Id) => {
      await fetchWithAuth("/deliveries/" + deliveryId, "delete");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["deliveries", week],
      });
    },
  });
};

export default useDeleteDeliveryMutation;
