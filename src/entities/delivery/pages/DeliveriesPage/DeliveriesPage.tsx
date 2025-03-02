import { Link, useParams } from "react-router";
import useDeliveriesQuery from "../../queries/useDeliveriesQuery";

const DeliveriesPage: React.FC = () => {
  const { week } = useParams<{ week: string }>();

  const weekNumber = Number(week?.split("-")[1]);

  const { data: deliveries } = useDeliveriesQuery(weekNumber);

  return (
    <>
      <header className="page-header">
        <h2>Deliveries week {weekNumber}</h2>
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
            <li key={delivery.id}>{delivery.ownerId}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DeliveriesPage;
