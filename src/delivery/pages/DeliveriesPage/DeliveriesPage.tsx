import { useParams } from "react-router";
import useDeliveries from "../../queries/useDeliveries";

const DeliveriesPage: React.FC = () => {
  const { week } = useParams<{ week: string }>();

  const weekNumber = Number(week?.split("-")[1]);

  const { data: deliveries } = useDeliveries(weekNumber);

  return (
    <>
      <h2>Entregas</h2>
      {deliveries && (
        <ul className="deliveries">
          {deliveries?.map((delivery) => (
            <li key={delivery.id}>{delivery.owner}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DeliveriesPage;
