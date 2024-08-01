import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatbotServiceBase } from "./base/chatbot.service.base";

@Injectable()
export class ChatbotService extends ChatbotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
