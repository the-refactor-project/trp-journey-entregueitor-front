import { useMutation } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { Delivery, NewDelivery } from "../types";
import queryClient from "../../../client/queryClient";

const useCreateDeliveryMutation = () => {
  return useMutation({
    mutationFn: async (newDeliveryData: NewDelivery) => {
      await fetchWithAuth<{ newDelivery: Delivery }>(
        "/deliveries",
        "post",
        newDeliveryData
      );
    },
    onSuccess: (_data, delivery) => {
      queryClient.invalidateQueries({
        queryKey: ["deliveries", delivery.week],
      });
    },
  });
};

export default useCreateDeliveryMutation;
