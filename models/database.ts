import {createConnection} from "typeorm";
import {Match} from "./entity/Match";
import {Prono} from "./entity/Prono";
import {Player} from "./entity/Player"

export const connection =createConnection({
    driver: {
        type: "sqlite",
        database: "nba_prono",
        storage:"./storage"
    },
    entities: [
        Match,
        Prono,
        Player
    ],
    autoSchemaSync: true,
})