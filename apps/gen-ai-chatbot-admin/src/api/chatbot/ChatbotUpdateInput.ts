import { InteractionUpdateManyWithoutChatbotsInput } from "./InteractionUpdateManyWithoutChatbotsInput";

export type ChatbotUpdateInput = {
  description?: string | null;
  interactions?: InteractionUpdateManyWithoutChatbotsInput;
  name?: string | null;
};
