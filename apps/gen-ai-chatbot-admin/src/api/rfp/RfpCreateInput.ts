import { ResponseCreateNestedManyWithoutRfpsInput } from "./ResponseCreateNestedManyWithoutRfpsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RfpCreateInput = {
  content?: string | null;
  responses?: ResponseCreateNestedManyWithoutRfpsInput;
  status?: "Option1" | null;
  submissionDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
