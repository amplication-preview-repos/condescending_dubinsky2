import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InteractionListRelationFilter } from "../interaction/InteractionListRelationFilter";

export type ChatbotWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  interactions?: InteractionListRelationFilter;
  name?: StringNullableFilter;
};
