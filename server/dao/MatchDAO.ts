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
                        "prono": "match.pronos"
                    }
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

    findMatchesByDay(date:number):Promise<Match[]>{
        let nextDate:number = date + 1000*24*60*60
        console.log(nextDate)
        console.log(date)
        return this.connection.then(connection=>{
            return connection.getRepository(Match)
            .createQueryBuilder("match")
            .where("match.date > :date AND match.date < :nextDate", { date: date ,nextDate:nextDate})
            .getMany()
        })
    }

    saveMatch(match: Match):Promise<any>{
        return this.connection
            .then(connection => {
                connection.getRepository(Match)
                    .persist(match);
            });
    }

    deleteMatch(match: Match) {
        this.connection
            .then(connection => {
                connection.getRepository(Match)
                    .remove(match);
            });
    }
}




