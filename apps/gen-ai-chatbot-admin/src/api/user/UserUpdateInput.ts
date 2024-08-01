import { InteractionUpdateManyWithoutUsersInput } from "./InteractionUpdateManyWithoutUsersInput";
import { ResponseUpdateManyWithoutUsersInput } from "./ResponseUpdateManyWithoutUsersInput";
import { RfpUpdateManyWithoutUsersInput } from "./RfpUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  interactions?: InteractionUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  responses?: ResponseUpdateManyWithoutUsersInput;
  rfps?: RfpUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
