
import { Player } from "../entities/Player";
import { PlayerDAO } from "../dao/playerDAO";
import { connection } from "../dao/database";


export class PlayerController {

    private playerDAO: PlayerDAO;
    constructor() {
        this.playerDAO = new PlayerDAO(connection);
    }

    public getPlayers(): Promise<Player[]> {
        return this.playerDAO.findAllPlayer()
    }
}