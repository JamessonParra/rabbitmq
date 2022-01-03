import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logg } from './logg.entity';
import { LoggService } from './logg.service';
import { LoggController } from './logg.controller';

@Module({
    imports:      [TypeOrmModule.forFeature([Logg])],
    controllers:  [LoggController],
    providers:    [LoggService],
    exports:      [LoggService]
  })
  export class LoggModule {}


