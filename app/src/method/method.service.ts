import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Method } from './method.entity';


@Injectable()
export class MethodService {
    constructor(
        @InjectRepository(Method) 
        private methodRepository: Repository<Method>
        
    ) {
    }

    async findAll(): Promise<Method[]> {
        return this.methodRepository.find();
      }
}
