import { type } from "os";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BaseEntity} from "typeorm";
import { Invoice } from './Invoice';


@Entity("Users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: true})
    name: string;

   

    @Column()
    password: string;

    @Column({nullable: true})
    otp: number;

    @Column({nullable: true})
    active: boolean;

    @Column({nullable: true})
    complete: boolean;

    @Column({nullable: true})
    phone: string;

    @Column()
    @CreateDateColumn()
    createdAt:Date;

    @Column()
    @CreateDateColumn()
    updateAt:Date;
    invoses: any;

    @OneToMany((type)=>Invoice,(invoce)=>invoce.user)
    invoces:Invoice[]
      
}

