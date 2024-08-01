import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResponseModuleBase } from "./base/response.module.base";
import { ResponseService } from "./response.service";
import { ResponseController } from "./response.controller";
import { ResponseResolver } from "./response.resolver";

@Module({
  imports: [ResponseModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResponseController],
  providers: [ResponseService, ResponseResolver],
  exports: [ResponseService],
})
export class ResponseModule {}
