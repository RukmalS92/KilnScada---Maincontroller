import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RealtimeDataMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    //mysql read and get data
    req.timevalue = 10
    next();
  }
}
