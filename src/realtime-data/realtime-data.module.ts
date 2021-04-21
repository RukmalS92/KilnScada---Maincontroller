import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RealtimeDataController } from './realtime-data.controller';
import { RealtimeDataMiddleware } from './realtime-data.middleware';
import { RealtimeDataService } from './realtime-data.service';

@Module({
  imports : [ClientsModule.register(
    [
      {name : 'DATA_MONITOR', transport : Transport.TCP, options : {host : 'localhost', port : 4100}}
    ])],
  controllers: [RealtimeDataController],
  providers: [RealtimeDataService]
})
export class RealtimeDataModule implements NestModule {
  configure(consumer : MiddlewareConsumer){
    // consumer.apply(RealtimeDataMiddleware).forRoutes('realtime-data')
    consumer.apply(RealtimeDataMiddleware).forRoutes({path : 'realtime-data/invread', method : RequestMethod.GET})
  }

}
