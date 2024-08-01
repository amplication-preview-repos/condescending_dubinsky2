import { ResponseUpdateManyWithoutRfpsInput } from "./ResponseUpdateManyWithoutRfpsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RfpUpdateInput = {
  content?: string | null;
  responses?: ResponseUpdateManyWithoutRfpsInput;
  status?: "Option1" | null;
  submissionDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
