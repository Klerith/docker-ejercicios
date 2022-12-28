import { Controller, Get, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ValidRoles } from '../auth/interfaces';
import { Auth } from '../auth/decorators';

import { SeedService } from './seed.service';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth( ValidRoles.admin )
  executeSeed() {
    return this.seedService.runSeed()
  }
}
