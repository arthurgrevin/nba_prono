import { Table, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Prono } from "./Prono"
import { Team } from "./Team"

@Table()
export class Match {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Team)
    @JoinColumn()
    home: Team;

    @OneToOne(type => Team)
    @JoinColumn()
    away: Team;

    @OneToOne(type => Team, { nullable: true })
    @JoinColumn()
    winner?: Team;

    @OneToMany(type => Prono, prono => prono.match, { cascadeAll: true })
    pronos?: Prono[];

    @Column("date")
    date: number;





}



