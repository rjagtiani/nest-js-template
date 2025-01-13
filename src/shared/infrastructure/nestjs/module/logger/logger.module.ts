import {Module} from '@nestjs/common';

import {WinstonLogger} from "@shared/infrastructure/logger/winston-logger";

@Module({
    providers: [
        {
            provide: WinstonLogger,
            useFactory: () => {
                return new WinstonLogger();
            },
        },
    ],
    exports: [WinstonLogger],
})

export class LoggerModule {}
