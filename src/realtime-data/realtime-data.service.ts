import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class RealtimeDataService {
    constructor(@Inject('DATA_MONITOR') private dataMonitorClient : ClientProxy){}

    async getTemperatureValues() : Promise<any> {
        return await this.dataMonitorClient.send('tempread','')
                      .pipe(
                        catchError(error => throwError(error.message))
                      )
                      .toPromise()
      }
    
      async getInverterSpeedValues(timevalue : number) : Promise<any> {
          return await this.dataMonitorClient.send('invread', {timevalue : timevalue})
                        .pipe(
                            catchError(error => throwError(error.message))
                        )
                        .toPromise()
      }
}
