import { ChatbotWhereUniqueInput } from "./ChatbotWhereUniqueInput";
import { ChatbotUpdateInput } from "./ChatbotUpdateInput";

export type UpdateChatbotArgs = {
  where: ChatbotWhereUniqueInput;
  data: ChatbotUpdateInput;
};
