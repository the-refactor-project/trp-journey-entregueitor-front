import { useParams } from "react-router";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import useStudentsQuery from "../../../student/queries/useStudentsQuery";
import { NewDelivery } from "../../types";
import useAuthGetInfoContext from "../../../../auth/context/useAuthGetInfoContext";
import useDeliveries from "../../hooks/useDeliveries";
import { NewDeliveryFormData } from "../../components/DeliveryForm/types";

const NewDeliveryPage = (): React.ReactElement => {
  const { studentId } = useAuthGetInfoContext();

  const { week } = useParams<{ week: string }>();

  const weekNumber = week?.split("-")[1];

  const { data } = useStudentsQuery();

  const { createDelivery } = useDeliveries();

  const onCreateDelivery = async (deliveryData: NewDeliveryFormData) => {
    const newDeliveryData: NewDelivery = {
      ...deliveryData,
      week: Number(weekNumber),
      ownerId: studentId,
    };

    if (deliveryData.firstTeammateId) {
      newDeliveryData.firstTeammateId = Number(deliveryData.firstTeammateId);
    }

    if (deliveryData.secondTeammateId) {
      newDeliveryData.secondTeammateId = Number(deliveryData.secondTeammateId);
    }

    await createDelivery(newDeliveryData);
  };

  return (
    <>
      <h2>New delivery week {weekNumber}</h2>
      {data && (
        <DeliveryForm createDelivery={onCreateDelivery} teamMates={data} />
      )}
    </>
  );
};

export default NewDeliveryPage;
