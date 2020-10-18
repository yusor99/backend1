
import { type } from "os";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany,CreateDateColumn, ManyToOne,BaseEntity} from "typeorm";
import { Category } from './Categories';
import { Invoice } from './Invoice';
import { InvoiceItem } from './InvoiceItem';


@Entity("Products")
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    image: String;

    @Column({type:"float"})
    price: Number;

    @Column({nullable: true})
    desc: string;

    @Column({nullable: true})
    active: boolean;

    @Column({nullable: true})
    categoryid: String;

    @Column()
    @CreateDateColumn()
    createdAt:Date;

    @Column({nullable: true})
    @CreateDateColumn()
    updateAt:Date;

    @Column({nullable: true})
    quantity:number;
    
    @ManyToOne((type)=>Category,(category)=>category.products)
    category:Category;

    @ManyToOne((type)=>Invoice,(invoceitem)=>invoceitem.id)
    invoceitem:Invoice;
    items: any;

    @OneToMany((type)=>InvoiceItem,(invoceItem)=>invoceItem.product)
    invoseItems:InvoiceItem[]
}