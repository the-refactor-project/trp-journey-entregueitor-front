import { Id, WithoutId } from "../../types";

export interface Delivery {
  id: Id;
  ownerId: Id;
  week: number;
  firstTeammateId?: Id;
  secondTeammateId?: Id;
  frontRepoUrl?: string;
  frontProductionUrl?: string;
  backRepoUrl?: string;
  backProductionUrl?: string;
  sprint1TrelloUrl?: string;
  sprint2TrelloUrl?: string;
  date: Date;
}

export type NewDelivery = Omit<WithoutId<Delivery>, "date">;
