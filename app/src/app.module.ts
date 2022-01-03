import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggModule } from './loggs/logg.module';
import { MethodModule } from './method/method.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import { UserModule } from './user/user.module';

@Module({
  imports:  [    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api_queue',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    MethodModule,
    UserModule,
    RabbitMQModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
