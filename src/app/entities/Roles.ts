import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("roles")
export class Roles extends AbstractEntity {
    @PrimaryGeneratedColumn("increment")
    public role_id: string;

    @Column({ nullable: false })
    public role_name: string;

    @Column({ nullable: true })
    public description: string;
}