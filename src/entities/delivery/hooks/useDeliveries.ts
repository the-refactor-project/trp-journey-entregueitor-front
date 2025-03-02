import { useNavigate, useSearchParams } from "react-router";
import { NewDelivery } from "../types";
import useCreateDeliveryMutation from "../mutations/useCreateDeliveryMutation";
import useSetUiContext from "../../../ui/context/useUiSetContext";

const useDeliveries = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateDeliveryMutation();
  const [searchParams] = useSearchParams();
  const { showInfo } = useSetUiContext();

  const week = searchParams.get("week");

  const createDelivery = async (newDeliveryData: NewDelivery) => {
    try {
      await mutateAsync(newDeliveryData);

      showInfo("info", "Delivery successfully created");

      navigate("/deliveries/week-" + week);
    } catch {
      showInfo("error", "Error on creating delivery");
    }
  };

  return { createDelivery };
};

export default useDeliveries;
