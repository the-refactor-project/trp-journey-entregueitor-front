import { useSearchParams } from "react-router";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import { NewDeliveryData } from "../../components/DeliveryForm/types";

const NewDeliveryPage = (): React.ReactElement => {
  const [searchParams] = useSearchParams();

  const week = searchParams.get("week");

  const onCreateDelivery = async (deliveryData: NewDeliveryData) => {
    console.log(deliveryData);
  };

  return (
    <>
      <h2>New delivery</h2>
      <DeliveryForm createDelivery={onCreateDelivery} week={week} />
    </>
  );
};

export default NewDeliveryPage;
