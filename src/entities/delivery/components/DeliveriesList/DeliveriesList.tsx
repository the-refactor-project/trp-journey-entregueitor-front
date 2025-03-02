import useAuthGetInfoContext from "../../../../auth/context/useAuthGetInfoContext";
import { Id } from "../../../../types";
import { DeliveryWithNames } from "../../types";
import DeliveryCard from "../DeliveryCard/DeliveryCard";
import "./DeliveriesList.css";

interface DeliveriesListProps {
  deliveries: DeliveryWithNames[];
  deleteDelivery: (deliveryId: Id) => void;
}

const DeliveriesList: React.FC<DeliveriesListProps> = ({
  deliveries,
  deleteDelivery,
}) => {
  const { studentId } = useAuthGetInfoContext();

  return (
    <ul className="deliveries">
      {deliveries.map((delivery) => (
        <DeliveryCard
          key={delivery.id}
          delivery={delivery}
          studentId={studentId}
          deleteDelivery={deleteDelivery}
        />
      ))}
    </ul>
  );
};

export default DeliveriesList;
