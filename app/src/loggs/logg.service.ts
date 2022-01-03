import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logg } from './logg.entity';


@Injectable()
export class LoggService {
    constructor(
        @InjectRepository(Logg) 
        private LoggRepository: Repository<Logg>
        
    ) {
    }

    async findAll(): Promise<Logg[]> {
        return this.LoggRepository.find();
    }

    async register(data: any): Promise<Logg[]> {
        return this.LoggRepository.save(data);
    }



}
