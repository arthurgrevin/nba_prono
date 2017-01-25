import * as express from "express";
import { Player } from "../entities/Player"
import { PlayerController } from "../controller/PlayerController";

export class PlayerRoutes {

    private routes: express.Router = express.Router();
    private playerController: PlayerController;
    constructor() {
        this.playerController = new PlayerController();
        this.initRoutes();
    };

    private initRoutes() {
        this.routes.get("/players/", (request: express.Request, response: express.Response) => {
            this.playerController
                .getPlayers()
                .then(players => {
                    response.send(players);
                })
        });


        this.routes.get("/players/:id", (request: express.Request, response: express.Response) => {

        });


        this.routes.post("/players/", (request: express.Request, response: express.Response) => {
        });

        this.routes.delete("/players/:id", (request: express.Request, response: express.Response) => {

        });
    }

    getRoutes() {
        return this.routes;
    }
}