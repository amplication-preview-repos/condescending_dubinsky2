import { Chatbot } from "../chatbot/Chatbot";
import { User } from "../user/User";

export type Interaction = {
  chatbot?: Chatbot | null;
  createdAt: Date;
  id: string;
  message: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
