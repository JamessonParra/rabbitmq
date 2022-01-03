import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('rabbit-mq-producer')
  public async execute(
    @Payload() data: number[], 
    @Ctx() context: RmqContext
  ) {
    
    /*
      Para eliminar el mensaje
      const channel = context.getChannelRef();
      const orginalMessage = context.getMessage();
      channel.ack(orginalMessage);
    */
    //Este mensaje capturado se debe enviar a la API de ink
    console.log(data);
  }
}