import { Id, WithoutId } from "../types";

export interface Delivery {
  id: Id;
  owner: string;
  week: number;
  firstTeammateName?: string;
  secondTeammateName?: string;
  frontRepoUrl?: string;
  frontProductionUrl?: string;
  backRepoUrl?: string;
  backProductionUrl?: string;
  sprint1TrelloUrl?: string;
  sprint2TrelloUrl?: string;
  date: Date;
}

export type NewDelivery = Omit<WithoutId<Delivery>, "date">;
