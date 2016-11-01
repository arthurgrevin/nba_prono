import {Match} from "../entity/Match"
import {Connection} from "typeorm"




export function findMatches(connection:Connection):Promise<Match[]>{
    return connection.getRepository(Match).find(
            {
            alias: "match",
            innerJoinAndSelect: {
            "prono": "match.pronos",
        }
    });
}

export function findMatchById(connection:Connection,id:number):Promise<Match>{
    return connection.getRepository(Match).findOneById(id,
    {
            alias: "match",
            innerJoinAndSelect: {
            "prono": "match.pronos",
        }});
}

export function saveMatch(connection:Connection,match:Match){
    connection.getRepository(Match).persist(match);
}

export function deleteMatch(connection:Connection,match:Match){
     connection.getRepository(Match).remove(match);
}

