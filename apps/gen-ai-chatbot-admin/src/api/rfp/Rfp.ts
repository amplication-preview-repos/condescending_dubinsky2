import { Response } from "../response/Response";
import { User } from "../user/User";

export type Rfp = {
  content: string | null;
  createdAt: Date;
  id: string;
  responses?: Array<Response>;
  status?: "Option1" | null;
  submissionDate: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
