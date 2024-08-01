import { Chatbot as TChatbot } from "../api/chatbot/Chatbot";

export const CHATBOT_TITLE_FIELD = "name";

export const ChatbotTitle = (record: TChatbot): string => {
  return record.name?.toString() || String(record.id);
};
