import { Player } from "../entities/Player"
import { Connection } from "typeorm"
import { connection } from "./database"


export class PlayerDAO {


    constructor(private connection: Promise<Connection>) {

    };

    findAllPlayer() {
        return this.connection
            .then(connection => {
                return connection.getRepository(Player)
                    .find({
                        alias: "player",
                        leftJoinAndSelect: {
                            "prono": "player.pronos",
                        }
                    });
            });
    }

    findPlayerById(id: number): Promise<Player> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Player)
                    .findOneById(id, {
                        alias: "player",
                        leftJoinAndSelect: {
                            "prono": "player.pronos",
                        }
                    });
            });
    }

    savePlayer(player: Player): Promise<any> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Player)
                    .persist(player);
            });
    }

    deletePlayer(player: Player): Promise<any> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Player)
                    .remove(player);
            });
    }

}