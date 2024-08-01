import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RfpWhereUniqueInput } from "../rfp/RfpWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResponseWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  rfp?: RfpWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
