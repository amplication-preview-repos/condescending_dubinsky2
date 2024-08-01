import { Rfp } from "../rfp/Rfp";
import { User } from "../user/User";

export type Response = {
  content: string | null;
  createdAt: Date;
  id: string;
  rfp?: Rfp | null;
  updatedAt: Date;
  user?: User | null;
};
