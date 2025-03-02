import { Link, useParams } from "react-router";
import useDeliveriesQuery from "../../queries/useDeliveriesQuery";
import DeliveriesList from "../../components/DeliveriesList/DeliveriesList";
import { Id } from "../../../../types";
import useStudents from "../../../student/queries/useStudents";
import { useEffect, useState } from "react";
import { DeliveryWithNames } from "../../types";
import useAuthGetInfoContext from "../../../../auth/context/useAuthGetInfoContext";
import useSetUiContext from "../../../../ui/context/useUiSetContext";
import useDeleteDeliveryMutation from "../../mutations/useDeleteDeliveryMutation";

const DeliveriesPage: React.FC = () => {
  const [deliveries, setDeliveries] = useState<DeliveryWithNames[]>([]);

  const { showConfirm } = useSetUiContext();

  const { studentId } = useAuthGetInfoContext();

  const { week } = useParams<{ week: string }>();

  const weekNumber = Number(week?.split("-")[1]);

  const { mutateAsync } = useDeleteDeliveryMutation(weekNumber);

  const { data } = useDeliveriesQuery(weekNumber);
  const { data: students } = useStudents();

  const [canCreate, setCanCreate] = useState(false);

  const deleteDelivery = (deliveryId: Id) => {
    showConfirm("Please confirm you want to delete this delivery", async () => {
      await mutateAsync(deliveryId);
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

        return {
          ...delivery,
          ownerName: deliveryOwner
            ? `${deliveryOwner.name} ${deliveryOwner.lastName}`
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
