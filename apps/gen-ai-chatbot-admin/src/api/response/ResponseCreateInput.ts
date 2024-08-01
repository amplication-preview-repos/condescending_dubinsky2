import { RfpWhereUniqueInput } from "../rfp/RfpWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResponseCreateInput = {
  content?: string | null;
  rfp?: RfpWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
