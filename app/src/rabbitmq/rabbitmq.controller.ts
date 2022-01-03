import { Body, Controller, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { RabbitMQService } from './rabbitmq.service';
import { LoggService } from 'src/loggs/logg.service';
import {Request} from 'express';

@Controller()
export class RabbitMQController {
  constructor(
    private readonly rabbitMQService: RabbitMQService, 
    private LoggService: LoggService 
  ) {}

  @Post('change_cabin_configuration')
    async change_cabin_configuration( 
        @Body('token')    token:    string,
        @Body('message')  message:  string, 
        @Req()            request:  Request       
    ){

        if(typeof(token) == "undefined" ){
          
          await this.LoggService.register({
            error_code:   HttpStatus.UNAUTHORIZED,
            method: "change_cabin_configuration",
            date_created: new Date(),
            status:   "UNAUTHORIZED: It's necessary authenticate before"
          }); 

          throw new HttpException("UNAUTHORIZED: It's necessary authenticate before", HttpStatus.UNAUTHORIZED) 
        }

        if(typeof(message) == "undefined" ){

          await this.LoggService.register({
            error_code:   HttpStatus.BAD_REQUEST,
            method: "change_cabin_configuration",
            date_created: new Date(),
            status:   "BAD_REQUEST: It's necessary the message for RabbitMQ"
          }); 

          throw new HttpException("BAD_REQUEST: It's necessary the message for RabbitMQ", HttpStatus.BAD_REQUEST) 
        }

        const cookie = request.cookies['token'];

        if(cookie != token){

          await this.LoggService.register({
            error_code:   HttpStatus.BAD_REQUEST,
            method: "change_cabin_configuration",
            date_created: new Date(),
            status:   "BAD_REQUEST: Check the value! Token send incorrectly"
          }); 

          throw new HttpException("BAD_REQUEST: Check the value! Token send incorrectly", HttpStatus.BAD_REQUEST) 
        }

        //Sending message
        this.rabbitMQService.send('rabbit-mq-producer', {
          message: message,
        });

        await this.LoggService.register({
          error_code: HttpStatus.OK,
          method: "change_cabin_configuration",
          date_created: new Date(),
          status: "OK: Message sent!"
        }); 

        throw new HttpException("Message sent!", HttpStatus.OK) 

      
    }

}