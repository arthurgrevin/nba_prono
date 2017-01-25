import { createConnection } from "typeorm";
import { Match } from "../entities/Match";
import { Prono } from "../entities/Prono";
import { Player } from "../entities/Player"
import { Team } from "../entities/Team";

export const connection = createConnection({
    driver: {
        type: "sqlite",
        storage: getDatabase(),
        database: 'nba-prono'
    },
    entities: [
        Match,
        Prono,
        Player,
        Team
    ],
    autoSchemaSync: true,
})

export function getDatabase() {
    let db: string;
    switch (process.env.NODE_ENV) {
        case 'test':
            db = "./storage-test";
            break;
        default:
            db = "./storage"

    }
    console.log(db)
    return db;
}