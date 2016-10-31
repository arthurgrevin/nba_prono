import {connection} from "../database"
import {Match} from "../entity/Match"



export function findMatches(): Promise<void>{
   return connection.then(
        connection=>{
        connection.getRepository(Match).find();
        }
    )
    
}

export function findMatchById(id:number):Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Match).findOneById(id);
        }
    )
}

export function saveMatch(match:Match){
    connection.then(
        connection => {
            connection.getRepository(Match).persist(match);
        }).then(x=>console.log("MatchService : match saved"))
}

export function deletMatch(match:Match){
    connection.then(
        connection=>{
            connection.getRepository(Match).remove(match);
        }
    )
}

