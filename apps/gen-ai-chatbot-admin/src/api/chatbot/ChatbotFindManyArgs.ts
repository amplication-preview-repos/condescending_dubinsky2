import { ChatbotWhereInput } from "./ChatbotWhereInput";
import { ChatbotOrderByInput } from "./ChatbotOrderByInput";

export type ChatbotFindManyArgs = {
  where?: ChatbotWhereInput;
  orderBy?: Array<ChatbotOrderByInput>;
  skip?: number;
  take?: number;
};
