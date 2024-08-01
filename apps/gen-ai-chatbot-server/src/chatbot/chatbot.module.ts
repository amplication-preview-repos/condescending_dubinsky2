import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatbotModuleBase } from "./base/chatbot.module.base";
import { ChatbotService } from "./chatbot.service";
import { ChatbotController } from "./chatbot.controller";
import { ChatbotResolver } from "./chatbot.resolver";

@Module({
  imports: [ChatbotModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChatbotController],
  providers: [ChatbotService, ChatbotResolver],
  exports: [ChatbotService],
})
export class ChatbotModule {}
