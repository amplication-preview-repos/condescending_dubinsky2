import { SortOrder } from "../../util/SortOrder";

export type InteractionOrderByInput = {
  chatbotId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
