import { RealtimeDataMiddleware } from './realtime-data.middleware';

describe('RealtimeDataMiddleware', () => {
  it('should be defined', () => {
    expect(new RealtimeDataMiddleware()).toBeDefined();
  });
});
