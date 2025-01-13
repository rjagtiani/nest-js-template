import process from "process";

import {ConfigService} from "@nestjs/config";
import {NestFactory} from "@nestjs/core";
import {FastifyAdapter, NestFastifyApplication,} from "@nestjs/platform-fastify";

import {ApiModule} from "@api/infrastructure/nestjs/api.module";
import {WinstonLogger} from "@shared/infrastructure/logger/winston-logger";

async function bootstrap() {
  const logger = new WinstonLogger();
  const app = await NestFactory.create<NestFastifyApplication>(
    ApiModule,
    new FastifyAdapter(),
    {
      cors: true,
      logger,
    },
  );
  app.setGlobalPrefix("api");
  if (process.env.NODE_ENV !== "test") {
    app.enableShutdownHooks();
  }

  const configService = app.get(ConfigService);
  const port = configService.get<string>("PORT", "3000");

  await app.listen(port, "0.0.0.0");
  logger.log(`App is ready and listening on port ${port}`);
}

void bootstrap();
