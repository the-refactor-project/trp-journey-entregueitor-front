import { useSearchParams } from "react-router";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import { NewDeliveryFormData } from "../../components/DeliveryForm/types";
import useStudents from "../../../student/queries/useStudents";
import { NewDelivery } from "../../types";
import useAuthGetInfoContext from "../../../../auth/context/useAuthGetInfoContext";
import useDeliveries from "../../hooks/useDeliveries";

const NewDeliveryPage = (): React.ReactElement => {
  const { studentId } = useAuthGetInfoContext();
  const [searchParams] = useSearchParams();

  const week = searchParams.get("week");

  const { data } = useStudents();

  const { createDelivery } = useDeliveries();

  const onCreateDelivery = async (deliveryData: NewDeliveryFormData) => {
    const newDeliveryData: NewDelivery = {
      ...deliveryData,
      week: Number(deliveryData.week),
      ownerId: studentId,
    };

    await createDelivery(newDeliveryData);
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
