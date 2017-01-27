import { Table, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Match } from "./Match"
import { Player } from "./Player"

@Table()
export class Prono {

    @PrimaryGeneratedColumn({ unique: true })
    id: number;

    @ManyToOne(type => Match, match => match.pronos, { cascadeAll: false })
    match: Match;

    @Column()
    choice: string;

    @Column({ nullable: true })
    valid: boolean;

    @ManyToOne(type => Player, player => player.pronos, { cascadeAll: false })
    player: Player;
}
