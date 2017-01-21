import { Table, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Prono } from "./Prono"
import { Team } from "./Team"

@Table()
export class Match {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    homeKey: string;

    @Column()
    awayKey: string;

    @Column({ nullable: true })
    private winnerKey?: string;

    @OneToMany(type => Prono, prono => prono.match, { cascadeAll: true })
    pronos?: Prono[];

    @Column("date")
    date: number;


    private home?: Team;
    private away?: Team;
    private winner?: Team;


    setWinnerKey(winnerKey: string) {
        if (winnerKey == this.awayKey || this.homeKey) {
            this.winnerKey = this.winnerKey
        }
    }

    getWinnerKey(): string {
        return this.winnerKey;
    }

    setHome(home: Team) {
        if (home.key == this.homeKey) {
            this.home = home
        }
    }

    getHome() {
        return this.home;
    }
    setAway(away: Team) {
        if (away.key == this.awayKey) {
            this.away = away
        }
    }

    getAway() {
        return this.away;
    }
    setWinner(winner: Team) {
        if (winner.key == this.winnerKey) {
            this.winner = winner
        }
    }

    getWinner() {
        return this.winner;
    }

}



