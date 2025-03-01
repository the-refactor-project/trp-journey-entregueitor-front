import { useSearchParams } from "react-router";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import { NewDeliveryData } from "../../components/DeliveryForm/types";
import useStudents from "../../../student/queries/useStudents";

const NewDeliveryPage = (): React.ReactElement => {
  const [searchParams] = useSearchParams();

  const { data } = useStudents();

  const week = searchParams.get("week");

  const onCreateDelivery = async (deliveryData: NewDeliveryData) => {
    console.log(deliveryData);
  };

  return (
    <>
      <h2>New delivery</h2>
      {data && (
        <DeliveryForm
          createDelivery={onCreateDelivery}
          teamMates={data}
          week={week}
        />
      )}
    </>
  );
};

export default NewDeliveryPage;
