import {Entity, PrimaryGeneratedColumn, Column, OneToMany,BaseEntity} from "typeorm";
@Entity("Notifications")
export class Notification extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    text: String;

    @Column()
    type: String;

    @Column()
    userId: Number;
}