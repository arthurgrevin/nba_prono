import { connection } from "../dao/database";
import { PlayerDAO } from "../dao/PlayerDAO";
import { Player } from "../entities/Player";
import { CONF } from "../conf";
import * as jwt from "jsonwebtoken";

const ONE_DAY_IN_SECOND: number = 86400;

export class AuthController {

    private playerDAO: PlayerDAO;

    constructor() {
        this.playerDAO = new PlayerDAO(connection);
    }

    public login(username: string, password: string): Promise<any> {
        return this.playerDAO.findAllPlayer()
            .then(players => {
                return AuthController.filterPlayer(players, username, password);
            })
            .then(filterPlayers => {
                let payload: Object;
                if (filterPlayers) {
                    const player = filterPlayers[0];
                    const token = AuthController.signJWT(player, CONF.key_jwt, ONE_DAY_IN_SECOND)
                    payload = {
                        "username": player.username,
                        "id": player.id,
                        "jwt": token
                    }
                }
                return payload;
            })
    }

    private static filterPlayer(players: Player[], username: string, password: string): Array<Player> {
        return players.filter(player => {
            return player.username == username && player.password == password
        })
    }

    private static signJWT(player, username, time) {
        return jwt.sign(player, username, {
            expiresIn: time
        });
    }
}