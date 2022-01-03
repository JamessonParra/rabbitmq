import { Controller, Get } from '@nestjs/common';
import { LoggService } from './logg.service';

@Controller()
export class LoggController{
    constructor(private readonly LoggService: LoggService) {}

    @Get("loggs")
    async findAll() {
      return this.LoggService.findAll();
    }

    async register(data: any){
      const u = await this.LoggService.register(data);
  }

}
