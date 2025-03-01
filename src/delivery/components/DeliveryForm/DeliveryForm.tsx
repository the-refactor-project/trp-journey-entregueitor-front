import { useState } from "react";
import { NewDeliveryData } from "./types";
import "./DeliveryForm.css";
import Button from "../../../components/Button/Button";
import useAuthGetInfoContext from "../../../auth/context/useAuthGetInfoContext";

interface DeliveryFormProps {
  createDelivery: (deliveryData: NewDeliveryData) => void;
  week: string | null;
}

const DeliveryForm = ({
  createDelivery,
  week,
}: DeliveryFormProps): React.ReactElement => {
  const members = ["Alexis", "Guillem"];

  const { userMaxWeek } = useAuthGetInfoContext();

  const weekNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter(
    (weekNumber) => {
      return weekNumber <= userMaxWeek;
    }
  );

  const newBlankDelivery: NewDeliveryData = {
    owner: "",
    week: week ?? "",
    firstTeammateName: "",
    secondTeammateName: "",
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
        <label htmlFor="owner" className="form__label">
          Who you are?
        </label>
        <select
          id="owner"
          className="form__control"
          value={newDeliveryData.owner}
          onChange={changeNewDeliveryData}
          required
        >
          <option value="">Choose member</option>
          {members.map((member) => (
            <option key={member}>{member}</option>
          ))}
        </select>
      </div>
      <div className="form__group"></div>
      <div className="form__group">
        {newDeliveryData.owner !== "" && (
          <>
            <label htmlFor="firstTeammateName" className="form__label">
              Partner 1?
            </label>
            <select
              id="firstTeammateName"
              className="form__control"
              value={newDeliveryData.firstTeammateName}
              onChange={changeNewDeliveryData}
            >
              <option value="">Choose member</option>
              {members
                .filter((member) => member !== newDeliveryData.owner)
                .map((member) => (
                  <option key={member}>{member}</option>
                ))}
            </select>
          </>
        )}
      </div>
      <div className="form__group">
        {newDeliveryData.firstTeammateName !== "" && (
          <>
            <label htmlFor="secondTeammateName" className="form__label">
              Partner 2?
            </label>
            <select
              id="secondTeammateName"
              className="form__control"
              value={newDeliveryData.secondTeammateName}
              onChange={changeNewDeliveryData}
            >
              <option value="">Choose member</option>
              {members
                .filter(
                  (member) =>
                    member !== newDeliveryData.owner &&
                    member !== newDeliveryData.firstTeammateName
                )
                .map((member) => (
                  <option key={member}>{member}</option>
                ))}
            </select>
          </>
        )}
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
      <div className="form__group"></div>
      <div className="form__group"></div>
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
      <div className="form__group"></div>
      <div className="form__group"></div>
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
        <Button buttonType="solid" size="medium" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};

export default DeliveryForm;
