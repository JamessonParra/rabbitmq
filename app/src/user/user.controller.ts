import {BadRequestException, Body, Controller, HttpException, HttpStatus, Post, Res} from '@nestjs/common';
import {UserService} from './user.service';
import * as bcrypt from 'bcrypt';
import {Response} from 'express';
import { JwtService } from '@nestjs/jwt';
import { LoggService } from 'src/loggs/logg.service';

@Controller('usr')
export class UserController {
    constructor(
        private readonly UserService: UserService,
        private readonly LoggService: LoggService,
        private jwtService: JwtService,
    ) {
    }

    @Post('register')
    async register(
        @Body('user') user: string,
        @Body('pass') pass: string
    ) {
        const hashedPassword = await bcrypt.hash(pass, 12);

        const u = await this.UserService.create({
            user,
            pass: hashedPassword
        });

        await this.LoggService.register({
            date_created: new Date(),
            method: "register",
            code:   HttpStatus.OK,
            note:   "User: "+user+" created!"
        }); 

        delete u.pass;

        return u;
    }

    @Post('login')
    async login(
        @Body('user') user: string,
        @Body('pass') pass: string,
        @Res({passthrough: true}) response: Response,
    ) {
        
        const u = await this.UserService.findOne({user});

        if (!u) {

            await this.LoggService.register({
                date_created: new Date(),
                method: "login",
                error_code:   HttpStatus.BAD_REQUEST,
                status:   "Dont exist the user!"
            }); 

            throw new BadRequestException('Dont exist the user!');
        }

        if (!await bcrypt.compare(pass, u.pass)) {

            await this.LoggService.register({
                date_created: new Date(),
                method: "login",
                error_code:   HttpStatus.UNAUTHORIZED,
                status:   "Invalid credentials"
            }); 

            throw new BadRequestException('Invalid credentials');
        }
        
        const jwt = await this.jwtService.signAsync({id: u.id});

        response.cookie('token', jwt, {httpOnly: true});
        
        //Save in console the success login
        await this.LoggService.register({
            method: "login",
            error_code:   HttpStatus.OK,
            date_created: new Date(),
            status: "Token generated: "+jwt
        }); 

        throw new HttpException(jwt,HttpStatus.OK);        
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        }
    }
}