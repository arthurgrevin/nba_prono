import {createConnection} from "typeorm";
import {Match} from "../entities/Match";
import {Prono} from "../entities/Prono";
import {Player} from "../entities/Player"


export const connection = createConnection({
    driver: {
        type: "sqlite",
        storage : getDatabase(),
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
    let db:string;
    switch(process.env.NODE_ENV){
        case 'test':
            db = "./storage-test"
        default :
            db = "./storage"
        
    }
    console.log(db)
    return db;
}