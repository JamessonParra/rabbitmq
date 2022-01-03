import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import {UserController} from './user.controller';
import {UserService}  from './user.service';
import {User} from './user.entity';
import { LoggModule } from 'src/loggs/logg.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '30m'}
        }), 
        LoggModule
    ],
    controllers: [UserController],
    providers: [UserService],
    
    
})
export class UserModule {}