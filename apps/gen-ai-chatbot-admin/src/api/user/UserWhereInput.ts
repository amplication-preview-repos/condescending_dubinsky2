import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InteractionListRelationFilter } from "../interaction/InteractionListRelationFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { RfpListRelationFilter } from "../rfp/RfpListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  interactions?: InteractionListRelationFilter;
  lastName?: StringNullableFilter;
  responses?: ResponseListRelationFilter;
  rfps?: RfpListRelationFilter;
  username?: StringFilter;
};
