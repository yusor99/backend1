import {Entity, PrimaryGeneratedColumn, Column, OneToMany,BaseEntity} from "typeorm";

@Entity("Admins")
export class Admin extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({unique:true})
    email:string;

    @Column()
    active: boolean;

    @Column()
    type: string; //admin //care//finse
}