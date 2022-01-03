import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Method } from './method.entity';
import { MethodService } from './method.service';
import { MethodController } from './method.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Method])],
    providers: [MethodService],
    controllers: [MethodController],
  })
  export class MethodModule {}


