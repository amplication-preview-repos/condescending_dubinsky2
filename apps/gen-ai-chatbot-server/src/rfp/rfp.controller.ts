import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RfpService } from "./rfp.service";
import { RfpControllerBase } from "./base/rfp.controller.base";

@swagger.ApiTags("rfps")
@common.Controller("rfps")
export class RfpController extends RfpControllerBase {
  constructor(
    protected readonly service: RfpService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
