import { NewDelivery } from "../../types";

export type NewDeliveryFormData = Omit<NewDelivery, "week">;
