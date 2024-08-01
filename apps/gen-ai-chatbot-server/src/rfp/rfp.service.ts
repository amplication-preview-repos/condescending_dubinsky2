import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RfpServiceBase } from "./base/rfp.service.base";

@Injectable()
export class RfpService extends RfpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
