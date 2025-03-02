import { useMutation } from "@tanstack/react-query";
import { fetchWithAuth } from "../../../client/axios";
import { Delivery, NewDelivery } from "../types";

const useCreateDeliveryMutation = () => {
  return useMutation({
    mutationFn: async (newDeliveryData: NewDelivery) => {
      await fetchWithAuth<{ newDelivery: Delivery }>(
        "/deliveries",
        "post",
        newDeliveryData
      );
    },
  });
};

export default useCreateDeliveryMutation;
