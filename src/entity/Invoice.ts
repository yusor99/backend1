import {Entity, PrimaryGeneratedColumn, Column, OneToMany,CreateDateColumn, ManyToOne,BaseEntity} from "typeorm";
import { InvoiceItem } from './InvoiceItem';
import { User } from './User';
@Entity("Invoices")
export class Invoice extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    userId: string;

    @Column({type:"float"})
    total: string;

    @Column()
    address: number;

    @Column()
    status: string;

    @Column()
    method: string;

    @Column()
    lat: string;

    @Column()
    long: string;

    @Column()
    @CreateDateColumn()
    createdAt:Date;

    @Column()
    @CreateDateColumn()
    updateAt:Date;

    @OneToMany((type) => InvoiceItem , (item )=> item.invoce)
    items:InvoiceItem[];

    @ManyToOne((type)=>User,(user)=>user.invoses)
    user:User

}