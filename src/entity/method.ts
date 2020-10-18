import {Entity, PrimaryGeneratedColumn, Column, OneToMany,CreateDateColumn,BaseEntity} from "typeorm";
@Entity("methods")
export class method extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    url: string;

    @Column()
    image:string;

    @Column()
    active: boolean;

    @Column()
    min: Number;
    @Column()
    max: Number;

    @Column()
    @CreateDateColumn()
    createdAt:Date;

    @Column()
    @CreateDateColumn()
    updateAt:Date;
}