import {Entity, PrimaryGeneratedColumn, Column, OneToMany,BaseEntity} from "typeorm";
import { Product } from './products';

@Entity("Categories ")
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn({type:"int"})

    id: number;

    @Column()
    title: string;

    @Column()
    icon: String;

    @Column()
    active: boolean;

    @OneToMany((type) => Product , (product )=> product.category)
    products:Product[];

}