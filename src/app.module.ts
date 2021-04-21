import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RealtimeDataModule } from './realtime-data/realtime-data.module';

@Module({
  imports: [RealtimeDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
