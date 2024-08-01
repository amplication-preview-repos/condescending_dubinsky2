import { InteractionCreateNestedManyWithoutChatbotsInput } from "./InteractionCreateNestedManyWithoutChatbotsInput";

export type ChatbotCreateInput = {
  description?: string | null;
  interactions?: InteractionCreateNestedManyWithoutChatbotsInput;
  name?: string | null;
};
