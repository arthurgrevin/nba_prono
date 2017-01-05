import { Table, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Prono } from "./Prono"
import {Team} from "./Team"

@Table()
export class Match {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    homeKey: string;

    @Column()
    awayKey: string;

    @Column({ nullable: true })
    winnerKey?: string;

    @OneToMany(type => Prono, prono => prono.match, { cascadeAll: true })
    pronos?: Prono[];

    @Column("date")
    date: number;


    home? : Team;
    away? : Team;
}



