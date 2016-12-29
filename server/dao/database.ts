import {createConnection} from "typeorm";
import {Match} from "../entities/Match";
import {Prono} from "../entities/Prono";
import {Player} from "../entities/Player"

const db = getDatabase()
export const connection = createConnection({
    driver: {
        type: "sqlite",
        storage :db,
        database : 'nba-prono'
    },
    entities: [
        Match,
        Prono,
        Player
    ],
    autoSchemaSync: true,
})

export function getDatabase(){
    if (process.env.NODE_ENV == 'test'){
        return "./storage-test";
    }
    if(process.env.NODE_ENV=='dev'){
        return "./storage"
    }
}