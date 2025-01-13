import { Controller, Get, HttpCode, Inject } from "@nestjs/common";

import Logger from "@shared/domain/logger/logger";
import {WinstonLogger} from "@shared/infrastructure/logger/winston-logger";

@Controller("health")
export class HealthController {
  constructor(@Inject(WinstonLogger) private readonly logger: Logger) {}

  @Get()
  @HttpCode(200)
  run() {
    this.logger.debug("Health endpoint called!");
    return { status: "ok" };
  }
}
