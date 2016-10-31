import {connection} from "../database"
import {Player} from "../entity/Player"


export function findAllPlayer():Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Player).find();
        })
}

export function findPlayerById(id:number):Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Player).findOneById(id)
        }
    )
}

export function savePlayer(player:Player){
    connection.then(
        connection => {
            connection.getRepository(Player).persist(player);
        })
}

export function deletePlayer(player:Player){
    connection.then(
        connection=>{
            connection.getRepository(Player).remove(player);
        }
    )
}