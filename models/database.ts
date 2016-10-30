import {createConnection} from "typeorm";
import {Match} from "./Match";


export const connection =createConnection({
    driver: {
        type: "sqlite",
        database: "nba_prono",
        storage:"./storage"
    },
    entities: [
        Match
    ],
    autoSchemaSync: true,
})