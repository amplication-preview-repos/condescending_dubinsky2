import { Interaction } from "../interaction/Interaction";

export type Chatbot = {
  createdAt: Date;
  description: string | null;
  id: string;
  interactions?: Array<Interaction>;
  name: string | null;
  updatedAt: Date;
};
