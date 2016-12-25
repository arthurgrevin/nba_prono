import {createConnection} from "typeorm";
import {Match} from "../entities/Match";
import {Prono} from "../entities/Prono";
import {Player} from "../entities/Player"

const db = getDatabase()
console.log(db)
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
    console.log("env :" +process.env.NODE_ENV)
    if (process.env.NODE_ENV == 'test'){
        console.log("je suis dans test")
        return "./storage-test";
    }
    if(process.env.NODE_ENV=='dev'){
        return "./storage"
    }
    else{
        console.log("nope")
    }
}