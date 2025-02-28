import { Id } from "../types";

export interface Delivery {
  id: Id;
  owner: string;
  firstTeammateName: string | null;
  secondTeammateName: string | null;
  frontRepoUrl: string | null;
  frontProductionUrl: string | null;
  backRepoUrl: string | null;
  backProductionUrl: string | null;
  sprint1TrelloUrl: string | null;
  sprint2TrelloUrl: string | null;
  date: Date;
}
