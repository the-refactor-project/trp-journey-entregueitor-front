import { useState } from "react";
import Button from "../../../../components/Button/Button";
import { Student } from "../../../student/types";
import { NewDeliveryFormData } from "./types";
import "./DeliveryForm.css";

interface DeliveryFormProps {
  createDelivery: (deliveryData: NewDeliveryFormData) => void;
  teamMates: Student[];
  isFinalProject?: boolean;
}

const DeliveryForm = ({
  createDelivery,
  teamMates,
  isFinalProject = false,
}: DeliveryFormProps): React.ReactElement => {
  const [deliveryType, setDeliveryType] = useState<"individual" | "team">(
    "individual"
  );

  const newBlankDelivery: NewDeliveryFormData = {
    ownerId: 0,
    firstTeammateId: 0,
    secondTeammateId: 0,
    sprint1TrelloUrl: "",
    sprint2TrelloUrl: "",
    frontRepoUrl: "",
    frontProductionUrl: "",
    backRepoUrl: "",
    backProductionUrl: "",
    figmaUrl: "",
    projectName: "",
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
      {isFinalProject ? (
        <>
          <div className="form__group">
            <label htmlFor="projectName">Project name</label>
            <input
              type="text"
              id="projectName"
              className="form__control"
              value={newDeliveryData.projectName}
              onChange={changeNewDeliveryData}
            />
          </div>
          <div className="form__group">
            <label htmlFor="figmaUrl">Figma URL</label>
            <input
              type="url"
              id="figmaUrl"
              className="form__control"
              value={newDeliveryData.figmaUrl}
              onChange={changeNewDeliveryData}
            />
          </div>
        </>
      ) : (
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
      )}
      {deliveryType === "team" && (
        <>
          <div className="form__group">
            <label htmlFor="firstTeammateId" className="form__label">
              Partner 1
            </label>
            <select
              id="firstTeammateId"
              className="form__control"
              value={newDeliveryData.firstTeammateId}
              required={deliveryType === "team"}
              onChange={changeNewDeliveryData}
            >
              <option value="">Choose team mate</option>
              {teamMates.map((teamMate) => (
                <option value={teamMate.id} key={teamMate.id}>
                  {teamMate.name}
                </option>
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
                <option value={teamMate.id} key={teamMate.id}>
                  {teamMate.name}
                </option>
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
      {isFinalProject && (
        <>
          <div className="form__group">
            <label htmlFor="sprint3TrelloUrl" className="form__label">
              Sprint 3 Trello URL
            </label>
            <input
              type="url"
              id="sprint3TrelloUrl"
              className="form__control"
              value={newDeliveryData.sprint3TrelloUrl}
              onChange={changeNewDeliveryData}
            />
          </div>
          <div className="form__group">
            <label htmlFor="sprint4TrelloUrl" className="form__label">
              Sprint 4 Trello URL
            </label>
            <input
              type="url"
              id="sprint4TrelloUrl"
              className="form__control"
              value={newDeliveryData.sprint4TrelloUrl}
              onChange={changeNewDeliveryData}
            />
          </div>
        </>
      )}
      <div className="form__group">
        <Button buttonType="solid" size="medium" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};

export default DeliveryForm;
