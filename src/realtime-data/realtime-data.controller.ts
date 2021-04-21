import { Controller, Get, Req } from '@nestjs/common';
import { RealtimeDataService } from './realtime-data.service';

@Controller('realtime-data')
export class RealtimeDataController {
    constructor(private readonly realtimedataservice : RealtimeDataService){}

    @Get('tempread') 
    async readTemperature() : Promise<any> {
        return await this.realtimedataservice.getTemperatureValues()
    }

    @Get('invread')
    async readSpeed(@Req() req : any) : Promise<any> {
        const timeValue = req.timevalue;
        return await this.realtimedataservice.getInverterSpeedValues(timeValue);
    }
}
