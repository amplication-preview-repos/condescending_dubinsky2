import { Interaction } from "../interaction/Interaction";
import { Response } from "../response/Response";
import { Rfp } from "../rfp/Rfp";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  interactions?: Array<Interaction>;
  lastName: string | null;
  responses?: Array<Response>;
  rfps?: Array<Rfp>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
