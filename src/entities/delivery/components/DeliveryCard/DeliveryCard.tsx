import Button from "../../../../components/Button/Button";
import { Id } from "../../../../types";
import { DeliveryWithNames } from "../../types";
import "./DeliveryCard.css";

interface DeliveryCardProps {
  delivery: DeliveryWithNames;
  studentId: Id;
  deleteDelivery: (deliveryId: Id) => void;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  delivery: {
    id,
    ownerId,
    ownerName,
    firstTeammateId,
    firstTeammateName,
    secondTeammateId,
    secondTeammateName,
    frontRepoUrl,
    frontProductionUrl,
    backRepoUrl,
    backProductionUrl,
    sprint1TrelloUrl,
    sprint2TrelloUrl,
  },
  studentId,
  deleteDelivery,
}) => {
  return (
    <li className="delivery">
      <h3>
        {ownerName}
        {!!firstTeammateId && ` - ${firstTeammateName}`}
        {!!secondTeammateId && ` - ${secondTeammateName}`}
      </h3>
      <ul className="delivery__links">
        {(!!frontRepoUrl || !!frontProductionUrl) && (
          <div className="delivery__links-group">
            {!!frontRepoUrl && (
              <li>
                <a href={frontRepoUrl} target="_blank">
                  Repo front
                </a>
              </li>
            )}
            {!!frontProductionUrl && (
              <li>
                <a href={frontProductionUrl} target="_blank">
                  Production front
                </a>
              </li>
            )}
          </div>
        )}
        {(!!backRepoUrl || !!backProductionUrl) && (
          <div className="delivery__links-group">
            {!!backRepoUrl && (
              <li>
                <a href={backRepoUrl} target="_blank">
                  Repo back
                </a>
              </li>
            )}
            {!!backProductionUrl && (
              <li>
                <a href={backProductionUrl} target="_blank">
                  Production back
                </a>
              </li>
            )}
          </div>
        )}
        {(!!sprint1TrelloUrl || !!sprint2TrelloUrl) && (
          <div className="delivery__links-group">
            {!!sprint1TrelloUrl && (
              <li>
                <a href={sprint1TrelloUrl} target="_blank">
                  Sprint 1 Trello
                </a>
              </li>
            )}
            {!!sprint2TrelloUrl && (
              <li>
                <a href={sprint2TrelloUrl} target="_blank">
                  Sprint 2 Trello
                </a>
              </li>
            )}
          </div>
        )}
      </ul>
      {(ownerId === studentId ||
        firstTeammateId === studentId ||
        secondTeammateId === studentId) && (
        <Button
          className="delivery__action"
          buttonType="icon"
          size="small"
          title="delete delivery"
          onClick={() => deleteDelivery(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-square-rounded-x-filled"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
              fill="currentColor"
              strokeWidth="0"
            />
          </svg>
        </Button>
      )}
    </li>
  );
};

export default DeliveryCard;
