import * as express from "express";
import { connection } from "../dao/database";
import { PronoDAO } from "../dao/PronoDAO";
import { Prono } from "../entities/Prono";
import { PlayerDAO } from "../dao/PlayerDAO";
import { MatchDAO } from "../dao/MatchDAO";

export class PronoRoutes {

    private routes: express.Router = express.Router();
    private pronoDAO: PronoDAO = new PronoDAO(connection);
    private playerDAO: PlayerDAO = new PlayerDAO(connection);
    private matchDAO: MatchDAO = new MatchDAO(connection);

    constructor() {
        this.routes.get("/pronos/", (request: express.Request, response: express.Response) => {
            response.header("Access-Control-Allow-Origin", "*");
            this.pronoDAO
                .findAllProno()
                .then(pronos => {
                    response.send(pronos)
                })
        });

        this.routes.get("/pronos/:id", (request: express.Request, response: express.Response) => {
            response.header("Access-Control-Allow-Origin", "*");
            const id: number = Number.parseInt(request.params.id);
            this.pronoDAO
                .findPronoById(id)
                .then(prono => {
                    response.send(prono)
                })
        });


        /**Should be audited */
        this.routes.post("/pronos", (request: express.Request, response: express.Response) => {
            response.header("Acces-Control-Allow-Origin", "*");
            let prono = new Prono();
            prono.choice = request.body.choice;
            const match_id = request.body.match;
            const player_id = request.body.player;
            this.playerDAO
                .findPlayerById(match_id)
                .then(player => {
                    prono.player = player;
                    this.matchDAO
                        .findMatchesById(match_id)
                        .then(match => {
                            prono.match = match;
                            this.pronoDAO
                                .saveProno(prono)
                                .then(x => {
                                    response.sendStatus(201);
                                });
                        });
                });
        })

        this.routes.put("/pronos/:id", (request: express.Request, response: express.Response) => {
            response.header("Acces-Control-Allow-Origin", "*");
            const id: number = Number.parseInt(request.params.id);
            const choice = request.body.choice;
            this.pronoDAO
                .findPronoById(id)
                .then(prono => {
                    prono.choice = choice
                    this.pronoDAO
                        .saveProno(prono)
                        .then(x => {
                            response.sendStatus(200)
                        })
                });
        });

        this.routes.delete("/pronos/:id", (request: express.Request, response: express.Response) => {
            response.header("Acces-Control-Allow-Origin", "*");
            const id: number = Number.parseInt(request.params.id);
            this.pronoDAO
                .findPronoById(id)
                .then(prono => {
                    this.pronoDAO
                        .deleteProno(prono)
                        .then(x => {
                            response.sendStatus(200)
                        })
                });
        });
    }

    getRoutes() {
        return this.routes;
    }

}