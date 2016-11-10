import {createConnection} from "typeorm";
import {Match} from "../entities/Match";
import {Prono} from "../entities/Prono";
import {Player} from "../entities/Player"

export const connection = createConnection({
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