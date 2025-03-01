import { NewDelivery } from "../../types";

export type NewDeliveryData = {
  [Key in keyof NewDelivery]: Key extends "week" ? string : NewDelivery[Key];
};
