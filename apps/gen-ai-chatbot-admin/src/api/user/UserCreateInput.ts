import { InteractionCreateNestedManyWithoutUsersInput } from "./InteractionCreateNestedManyWithoutUsersInput";
import { ResponseCreateNestedManyWithoutUsersInput } from "./ResponseCreateNestedManyWithoutUsersInput";
import { RfpCreateNestedManyWithoutUsersInput } from "./RfpCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  interactions?: InteractionCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  responses?: ResponseCreateNestedManyWithoutUsersInput;
  rfps?: RfpCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
