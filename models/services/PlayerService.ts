import {Player} from "../entity/Player"
import {Connection} from "typeorm"


export function findAllPlayer(connection:Connection):Promise<Player[]>{
    return connection.getRepository(Player).find(
            {
            alias: "player",
            innerJoinAndSelect: {
            "prono": "player.pronos",
        }
    });
}

export function findPlayerById(connection : Connection, id:number):Promise<Player>{
    return connection.getRepository(Player).findOneById(id,
     {
            alias: "player",
            innerJoinAndSelect: {
            "prono": "player.pronos",
        }
    });
}

export function savePlayer(connection:Connection,player:Player){
    connection.getRepository(Player).persist(player);
}

export function deletePlayer(connection: Connection,player:Player){
    connection.getRepository(Player).remove(player);
}