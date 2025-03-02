import { useNavigate, useParams } from "react-router";
import { NewDelivery } from "../types";
import useCreateDeliveryMutation from "../mutations/useCreateDeliveryMutation";
import useSetUiContext from "../../../ui/context/useUiSetContext";

const useDeliveries = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreateDeliveryMutation();
  const { showInfo } = useSetUiContext();

  const { week } = useParams<{ week: string }>();

  const createDelivery = async (newDeliveryData: NewDelivery) => {
    try {
      await mutateAsync(newDeliveryData);

      showInfo("info", "Delivery successfully created");

      navigate("/deliveries/" + week);
    } catch {
      showInfo("error", "Error on creating delivery");
    }
  };

  return { createDelivery };
};

export default useDeliveries;
