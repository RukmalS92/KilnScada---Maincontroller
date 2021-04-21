import { Test, TestingModule } from '@nestjs/testing';
import { RealtimeDataService } from './realtime-data.service';

describe('RealtimeDataService', () => {
  let service: RealtimeDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealtimeDataService],
    }).compile();

    service = module.get<RealtimeDataService>(RealtimeDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
