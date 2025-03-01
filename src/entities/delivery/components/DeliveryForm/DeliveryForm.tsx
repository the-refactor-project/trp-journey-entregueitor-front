import { useState } from "react";
import { NewDeliveryData } from "./types";
import Button from "../../../../components/Button/Button";
import useAuthGetInfoContext from "../../../../auth/context/useAuthGetInfoContext";
import { Student } from "../../../student/types";
import "./DeliveryForm.css";

interface DeliveryFormProps {
  createDelivery: (deliveryData: NewDeliveryData) => void;
  week: string | null;
  teamMates: Student[];
}

const DeliveryForm = ({
  createDelivery,
  week,
  teamMates,
}: DeliveryFormProps): React.ReactElement => {
  const { userMaxWeek } = useAuthGetInfoContext();

  const weekNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter(
    (weekNumber) => {
      return weekNumber <= userMaxWeek;
    }
  );

  const [deliveryType, setDeliveryType] = useState<"individual" | "team">(
    "individual"
  );

  const newBlankDelivery: NewDeliveryData = {
    ownerId: 0,
    week: week ?? "",
    firstTeammateId: 0,
    secondTeammateId: 0,
    sprint1TrelloUrl: "",
    sprint2TrelloUrl: "",
    frontRepoUrl: "",
    frontProductionUrl: "",
    backRepoUrl: "",
    backProductionUrl: "",
  };

  const [newDeliveryData, setNewDeliveryData] = useState(newBlankDelivery);

  const changeNewDeliveryData = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const elementValue = event.target.value;
    const elementId = event.target.id;

    setNewDeliveryData({
      ...newDeliveryData,
      [elementId]: elementValue,
    });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createDelivery(newDeliveryData);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form__group">
        <label>
          <input
            type="radio"
            name="deliveryType"
            id="deliveryType"
            value="individual"
            checked={deliveryType === "individual"}
            onChange={() => setDeliveryType("individual")}
          />
          individual
        </label>
        <label>
          <input
            type="radio"
            name="deliveryType"
            id="deliveryType"
            value="team"
            checked={deliveryType === "team"}
            onChange={() => setDeliveryType("team")}
          />
          team
        </label>
      </div>
      <div className="form__group">
        <label htmlFor="week" className="form__label">
          Week:
        </label>
        <select
          id="week"
          className="form__control"
          value={newDeliveryData.week}
          onChange={changeNewDeliveryData}
          required
        >
          <option value="">Choose week number</option>
          {weekNumbers.map((weekNumber) => (
            <option key={weekNumber} value={weekNumber}>
              {weekNumber}
            </option>
          ))}
        </select>
      </div>
      {deliveryType === "team" && (
        <>
          <div className="form__group">
            <label htmlFor="firstTeammateId" className="form__label">
              Partner 1?
            </label>
            <select
              id="firstTeammateId"
              className="form__control"
              value={newDeliveryData.firstTeammateId}
              onChange={changeNewDeliveryData}
            >
              <option value="">Choose team mate</option>
              {teamMates.map((teamMate) => (
                <option key={teamMate.id}>{teamMate.name}</option>
              ))}
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="secondTeammateId" className="form__label">
              Partner 2?
            </label>
            <select
              id="secondTeammateId"
              className="form__control"
              value={newDeliveryData.secondTeammateId}
              onChange={changeNewDeliveryData}
            >
              <option value="">Choose team mate</option>
              {teamMates.map((teamMate) => (
                <option key={teamMate.id}>{teamMate.name}</option>
              ))}
            </select>
          </div>
        </>
      )}
      <div className="form__group">
        <label htmlFor="frontRepoUrl" className="form__label">
          Front Repo URL
        </label>
        <input
          type="url"
          id="frontRepoUrl"
          className="form__control"
          value={newDeliveryData.frontRepoUrl}
          onChange={changeNewDeliveryData}
        />
      </div>
      <div className="form__group">
        <label htmlFor="frontProductionUrl" className="form__label">
          Front Production URL
        </label>
        <input
          type="url"
          id="frontProductionUrl"
          className="form__control"
          value={newDeliveryData.frontProductionUrl}
          onChange={changeNewDeliveryData}
        />
      </div>
      <div className="form__group">
        <label htmlFor="backRepoUrl" className="form__label">
          Back Repo URL
        </label>
        <input
          type="url"
          id="backRepoUrl"
          className="form__control"
          value={newDeliveryData.backRepoUrl}
          onChange={changeNewDeliveryData}
        />
      </div>
      <div className="form__group">
        <label htmlFor="backProductionUrl" className="form__label">
          Back Production URL
        </label>
        <input
          type="url"
          id="backProductionUrl"
          className="form__control"
          value={newDeliveryData.backProductionUrl}
          onChange={changeNewDeliveryData}
        />
      </div>
      <div className="form__group">
        <label htmlFor="sprint1TrelloUrl" className="form__label">
          Sprint 1 Trello URL
        </label>
        <input
          type="url"
          id="sprint1TrelloUrl"
          className="form__control"
          value={newDeliveryData.sprint1TrelloUrl}
          onChange={changeNewDeliveryData}
        />
      </div>
      <div className="form__group">
        <label htmlFor="sprint2TrelloUrl" className="form__label">
          Sprint 2 Trello URL
        </label>
        <input
          type="url"
          id="sprint2TrelloUrl"
          className="form__control"
          value={newDeliveryData.sprint2TrelloUrl}
          onChange={changeNewDeliveryData}
        />
      </div>
      <div className="form__group">
        <Button buttonType="solid" size="medium" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};

export default DeliveryForm;
