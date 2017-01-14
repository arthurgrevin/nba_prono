import * as express from "express";
import { connection } from "../dao/database";
import { PlayerDAO } from "../dao/PlayerDAO";
import { Player } from "../entities/Player"

export class PlayerRoutes {

    private routes: express.Router = express.Router();
    private playerDAO: PlayerDAO = new PlayerDAO(connection)

    constructor() {
        this.routes.get("/players/", (request: express.Request, response: express.Response) => {
            this.playerDAO
                .findAllPlayer()
                .then(players => {
                    response.send(players);
                });
        });


        this.routes.get("/players/:id", (request: express.Request, response: express.Response) => {
            const id: number = Number.parseInt(request.params.id);
            this.playerDAO
                .findPlayerById(id)
                .then(player => {
                    if (player) {
                        response.send(player);
                    } else {
                        response.sendStatus(500);
                    }
                });
        });


        this.routes.post("/players/", (request: express.Request, response: express.Response) => {
            let player = request.body as Player
            player.score = 0;
            this.playerDAO
                .savePlayer(player)
                .then(r => response.sendStatus(201))
                .catch(r => response.sendStatus(500))
        });

        this.routes.delete("/players/:id", (request: express.Request, response: express.Response) => {
            const id: number = Number.parseInt(request.params.id);
            this.playerDAO.findPlayerById(id)
                .then(player => {
                    if (player) {
                        this.playerDAO
                            .deletePlayer(player)
                            .then(r => response.sendStatus(200))
                            .catch(err => response.sendStatus(500))
                    } else {
                        response.sendStatus(500);
                    }

                })

        });
    };

    getRoutes() {
        return this.routes;
    }
}