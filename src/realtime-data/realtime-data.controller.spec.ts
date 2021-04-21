import { Test, TestingModule } from '@nestjs/testing';
import { RealtimeDataController } from './realtime-data.controller';

describe('RealtimeDataController', () => {
  let controller: RealtimeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealtimeDataController],
    }).compile();

    controller = module.get<RealtimeDataController>(RealtimeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
