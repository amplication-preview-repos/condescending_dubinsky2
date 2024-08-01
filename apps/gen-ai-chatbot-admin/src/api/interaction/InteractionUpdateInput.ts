import { ChatbotWhereUniqueInput } from "../chatbot/ChatbotWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InteractionUpdateInput = {
  chatbot?: ChatbotWhereUniqueInput | null;
  message?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
