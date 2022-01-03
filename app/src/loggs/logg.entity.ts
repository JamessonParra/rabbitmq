import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('loggs')
export class Logg {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    method: string;

    @Column()
    error_code: number;

    @Column()
    status: string;

    @CreateDateColumn()
    date_created: Date;
}