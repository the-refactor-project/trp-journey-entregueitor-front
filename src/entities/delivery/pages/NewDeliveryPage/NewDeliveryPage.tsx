import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import useStudentsQuery from "../../../student/queries/useStudentsQuery";
import { NewDelivery } from "../../types";
import useAuthGetInfoContext from "../../../../auth/context/useAuthGetInfoContext";
import useDeliveries from "../../hooks/useDeliveries";
import { NewDeliveryFormData } from "../../components/DeliveryForm/types";
import useDeliveriesQuery from "../../queries/useDeliveriesQuery";

const NewDeliveryPage = (): React.ReactElement => {
  const { studentId } = useAuthGetInfoContext();

  const { week } = useParams<{ week: string }>();

  const finalProjectWeekNumber = 10;

  const weekNumber =
    week?.toLowerCase() === "final-project"
      ? finalProjectWeekNumber
      : Number(week?.split("-")[1]);

  const isFinalProject = weekNumber === finalProjectWeekNumber;

  const { data: deliveries } = useDeliveriesQuery(Number(weekNumber));

  const navigate = useNavigate();

  const { data } = useStudentsQuery();

  useEffect(() => {
    if (
      deliveries &&
      deliveries.some(
        (delivery) =>
          delivery.ownerId === studentId ||
          delivery.firstTeammateId === studentId ||
          delivery.secondTeammateId === studentId
      )
    ) {
      navigate("/deliveries/week-" + weekNumber);
    }
  }, [deliveries, navigate, studentId, weekNumber]);

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
        <DeliveryForm
          createDelivery={onCreateDelivery}
          teamMates={data}
          isFinalProject={isFinalProject}
        />
      )}
    </>
  );
};

export default NewDeliveryPage;
