import { HealthController } from "@src/api/health/api/health.controller";
import { Test } from "@nestjs/testing";
import { ApiModule } from "@src/api/infrastructure/nestjs/api.module";

describe("HealthController", () => {
  let healthController: HealthController;

  beforeEach(async () => {
    const api = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

    healthController = api.get(HealthController);
  });

  it('should work', () => expect(healthController.run()).toEqual({ status: "ok" }));
});
