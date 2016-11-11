import * as express from "express";
import { connection } from "../dao/database";
import { PlayerDAO } from "../dao/PlayerDAO";
import { Player } from "../entities/Player"

export class PlayerRoutes {

    private routes: express.Router = express.Router();
    private playerDAO: PlayerDAO = new PlayerDAO(connection)

    constructor() {
        this.routes.get("/players/", (request: express.Request, response: express.Response) => {
            response.header("Access-Control-Allow-Origin", "*");
            this.playerDAO
                .findAllPlayer()
                .then(players => {
                    response.send(players);
                });
        });
        this.routes.get("/players/:id", (request: express.Request, response: express.Response) => {
            response.header("Access-Control-Allow-Origin", "*");
            const id: number = Number.parseInt(request.params.id);
            this.playerDAO
                .findPlayerById(id)
                .then(players => {
                    response.send(players);
                });
        });
        this.routes.post("/players/", (request: express.Request, response: express.Response) => {
            response.header("Access-Control-Allow-Origin", "*");
            let player = request.body as Player
            player.score = 0;
            this.playerDAO
                .savePlayer(player)
                .then(r => response.sendStatus(201))
        });

        this.routes.delete("/players/:id", (request: express.Request, response: express.Response) => {
            const id: number = Number.parseInt(request.params.id);
            this.playerDAO.findPlayerById(id)
                .then(player => {
                    this.playerDAO
                        .deletePlayer(player)
                        .then(r => response.sendStatus(200))
                })

        });
    };

    getRoutes() {
        return this.routes;
    }
}