import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggModule } from 'src/loggs/logg.module';
import { RabbitMQController } from './rabbitmq.controller';
import { RabbitMQService } from './rabbitmq.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'rabbit-mq-module',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'change_cabin_configuration',
        },
      },
    ]),
    LoggModule
  ],
  controllers: [RabbitMQController],
  providers: [RabbitMQService],
})
export class RabbitMQModule {}