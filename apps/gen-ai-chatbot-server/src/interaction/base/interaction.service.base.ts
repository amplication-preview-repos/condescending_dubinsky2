/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Interaction as PrismaInteraction,
  Chatbot as PrismaChatbot,
  User as PrismaUser,
} from "@prisma/client";

export class InteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InteractionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.interaction.count(args);
  }

  async interactions(
    args: Prisma.InteractionFindManyArgs
  ): Promise<PrismaInteraction[]> {
    return this.prisma.interaction.findMany(args);
  }
  async interaction(
    args: Prisma.InteractionFindUniqueArgs
  ): Promise<PrismaInteraction | null> {
    return this.prisma.interaction.findUnique(args);
  }
  async createInteraction(
    args: Prisma.InteractionCreateArgs
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.create(args);
  }
  async updateInteraction(
    args: Prisma.InteractionUpdateArgs
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.update(args);
  }
  async deleteInteraction(
    args: Prisma.InteractionDeleteArgs
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.delete(args);
  }

  async getChatbot(parentId: string): Promise<PrismaChatbot | null> {
    return this.prisma.interaction
      .findUnique({
        where: { id: parentId },
      })
      .chatbot();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.interaction
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
