import { Interaction as TInteraction } from "../api/interaction/Interaction";

export const INTERACTION_TITLE_FIELD = "id";

export const InteractionTitle = (record: TInteraction): string => {
  return record.id?.toString() || String(record.id);
};
