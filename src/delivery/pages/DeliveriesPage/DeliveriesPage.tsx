import { Link, useParams } from "react-router";
import useDeliveries from "../../queries/useDeliveries";

const DeliveriesPage: React.FC = () => {
  const { week } = useParams<{ week: string }>();

  const weekNumber = Number(week?.split("-")[1]);

  const { data: deliveries } = useDeliveries(weekNumber);

  return (
    <>
      <header className="page-header">
        <h2>Deliveries</h2>
        <Link
          to={`/deliveries/new?week=${weekNumber}`}
          className="button button--inline button--medium"
        >
          New delivery
        </Link>
      </header>
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
