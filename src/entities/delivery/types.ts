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
  sprint3TrelloUrl?: string;
  sprint4TrelloUrl?: string;
  figmaUrl?: string;
  projectName?: string;
  date: Date;
}

export interface DeliveryWithNames extends Delivery {
  ownerName: string;
  firstTeammateName?: string;
  secondTeammateName?: string;
}

export type NewDelivery = Omit<WithoutId<Delivery>, "date">;
