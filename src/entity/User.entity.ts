import {Status} from '../enums';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ default: "user" })
    role: string;

    @Column({type: 'enum', enum: Status, default: Status.ACTIVE})
    status: string

    @Column({ default: false })
    online: boolean

    @Column({ type: 'timestamptz', nullable: true })
    last_login: Date

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}