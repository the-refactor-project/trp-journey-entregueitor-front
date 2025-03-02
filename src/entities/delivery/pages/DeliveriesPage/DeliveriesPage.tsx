import { Link, useParams } from "react-router";
import useDeliveriesQuery from "../../queries/useDeliveriesQuery";
import DeliveriesList from "../../components/DeliveriesList/DeliveriesList";
import { Id } from "../../../../types";
import useStudentsQuery from "../../../student/queries/useStudentsQuery";
import { useEffect, useState } from "react";
import { DeliveryWithNames } from "../../types";
import useAuthGetInfoContext from "../../../../auth/context/useAuthGetInfoContext";
import useSetUiContext from "../../../../ui/context/useUiSetContext";
import useDeleteDeliveryMutation from "../../mutations/useDeleteDeliveryMutation";

const DeliveriesPage: React.FC = () => {
  const [deliveries, setDeliveries] = useState<DeliveryWithNames[]>([]);

  const { showConfirm, showInfo } = useSetUiContext();

  const { studentId } = useAuthGetInfoContext();

  const { week } = useParams<{ week: string }>();

  const weekNumber = Number(week?.split("-")[1]);

  const { mutateAsync } = useDeleteDeliveryMutation(weekNumber);

  const { data, error: deliveriesError } = useDeliveriesQuery(weekNumber);
  const { data: students, error: studentsError } = useStudentsQuery();

  useEffect(() => {
    if (deliveriesError || studentsError) {
      showInfo("error", "The petation has occurred");
    }
  }, [deliveriesError, studentsError, showInfo]);

  const [canCreate, setCanCreate] = useState(false);

  const deleteDelivery = (deliveryId: Id) => {
    showConfirm("Please confirm you want to delete this delivery", async () => {
      await mutateAsync(deliveryId);
      showInfo("info", "Delivery successfully deleted");
    });
  };

  useEffect(() => {
    if (!data || !students) {
      return;
    }

    setDeliveries(
      data.map<DeliveryWithNames>((delivery) => {
        const deliveryOwner = students.find(
          (student) => delivery.ownerId === student.id
        );

        const firstTeammate = students.find(
          (student) => delivery.firstTeammateId === student.id
        );

        const secondTeammate = students.find(
          (student) => delivery.secondTeammateId === student.id
        );

        return {
          ...delivery,
          ownerName: deliveryOwner
            ? `${deliveryOwner.name} ${deliveryOwner.lastName}`
            : "",
          firstTeammateName: firstTeammate
            ? `${firstTeammate.name} ${firstTeammate.lastName}`
            : "",
          secondTeammateName: secondTeammate
            ? `${secondTeammate.name} ${secondTeammate.lastName}`
            : "",
        };
      })
    );
  }, [data, students]);

  useEffect(() => {
    setCanCreate(
      !deliveries.some((delivery) => delivery.ownerId === studentId)
    );
  }, [deliveries, studentId]);

  return (
    <>
      <header className="page-header">
        <h2>Deliveries week {weekNumber}</h2>
        {canCreate && (
          <Link
            to={`/deliveries/${week}/new`}
            className="button button--inline button--medium"
          >
            New delivery
          </Link>
        )}
      </header>
      {deliveries && (
        <DeliveriesList
          deliveries={deliveries}
          deleteDelivery={deleteDelivery}
        />
      )}
    </>
  );
};

export default DeliveriesPage;
