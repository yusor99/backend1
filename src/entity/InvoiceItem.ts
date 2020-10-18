import {Entity, PrimaryGeneratedColumn, Column, OneToMany,CreateDateColumn, ManyToOne,BaseEntity} from "typeorm";
import { Invoice } from './Invoice';
import { Product } from './products';
@Entity("InvoiceItem")
export class InvoiceItem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    invoceId: string;

    @Column()
    productId: String;
    
    
    @Column()
    @CreateDateColumn()
    createdAt:Date;

    @Column()
    @CreateDateColumn()
    updateAt:Date;

      
    @ManyToOne((type)=>Invoice,(invoce)=>invoce.items)
    invoce:Invoice;

    @OneToMany((type) => Product , (product )=> product.items)
    product:Product[];
    
}