import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('methods')
export class Method {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    method: string;

    @Column()
    type: string;

    @Column()
    description: string;

}