import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RfpModuleBase } from "./base/rfp.module.base";
import { RfpService } from "./rfp.service";
import { RfpController } from "./rfp.controller";
import { RfpResolver } from "./rfp.resolver";

@Module({
  imports: [RfpModuleBase, forwardRef(() => AuthModule)],
  controllers: [RfpController],
  providers: [RfpService, RfpResolver],
  exports: [RfpService],
})
export class RfpModule {}
