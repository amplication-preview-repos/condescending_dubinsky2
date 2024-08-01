import { RfpWhereUniqueInput } from "../rfp/RfpWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResponseUpdateInput = {
  content?: string | null;
  rfp?: RfpWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
