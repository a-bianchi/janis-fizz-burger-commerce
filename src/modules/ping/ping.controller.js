import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller({
  version: VERSION_NEUTRAL
})
@Controller('ping')
export class PingController {
  @ApiOkResponse({
    description: 'Endpoint to check if the service is up and operational',
    type: String
  })
  @Get('/ping')
  ping() {
    return 'OK';
  }
}
