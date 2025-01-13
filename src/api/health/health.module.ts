import {Module} from "@nestjs/common";

import {HealthController} from "@api/health/api/health.controller";
import {LoggerModule} from "@shared/infrastructure/nestjs/module/logger/logger.module";


@Module({
  imports: [
    LoggerModule
  ],
  controllers: [HealthController],
})
export class HealthModule {
}
