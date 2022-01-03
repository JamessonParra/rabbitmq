import { Controller, Get } from '@nestjs/common';
import { MethodService } from './method.service';

@Controller()
export class MethodController {
    constructor(private readonly MethodService: MethodService) {}

    @Get()
    async findAll() {
      return this.MethodService.findAll();
    }

}
