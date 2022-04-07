import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("address")
export class Address extends AbstractEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column({ nullable: false })
    public line1: string;

    @Column({ nullable: true })
    public line2: string;

}
