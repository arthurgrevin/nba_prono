import { Match } from "../entities/Match"
import { Connection } from "typeorm"
import { connection } from "./database"

export class MatchDAO {

    constructor(private connection: Promise<Connection>) {

    }

    findMatches(): Promise<Match[]> {

        return this.connection.then(connection => {
            return connection.getRepository(Match)
                .find({
                    alias: "match",
                    leftJoinAndSelect: {
                        "prono": "match.pronos",
                        "home": "match.home",
                        "away": "match.away",
                        "winner": "match.winner"
                    },


                });
        });
    }

    findMatchesById(id: number): Promise<Match> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Match)
                    .findOneById(id,
                    {
                        alias: "match",
                        leftJoinAndSelect: {
                            "prono": "match.pronos",
                        }
                    });
            })
    }

    findMatchesByDateAndPlayer(date: number, playerId: number): Promise<Match[]> {
        let nextDate: number = date + 1000 * 24 * 60 * 60
        return this.connection.then(connection => {
            return connection.getRepository(Match)
                .createQueryBuilder("match")
                .leftJoinAndSelect("match.pronos", "prono", "prono.player = :player")
                .leftJoinAndSelect("match.home", "home")
                .leftJoinAndSelect("match.away", "away")
                .leftJoinAndSelect("match.winner", "winner")
                .where("match.date >= :date AND match.date < :nextDate", { date: date, nextDate: nextDate })
                .andWhere("(prono.player is null OR prono.player = :player)", { player: playerId })
                .getMany()
        })
    }

    saveMatch(match: Match): Promise<any> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Match)
                    .persist(match);
            });
    }

    deleteMatch(match: Match) {
        this.connection
            .then(connection => {
                return connection.getRepository(Match)
                    .remove(match);
            });
    }
}




