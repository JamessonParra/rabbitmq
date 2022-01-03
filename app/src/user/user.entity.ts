import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: string;

    @Column()
    pass: string;

}