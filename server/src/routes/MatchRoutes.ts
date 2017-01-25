import * as express from "express";
import { MatchController } from "../controller/MatchController";


export class MatchRoutes {

    private routes: express.Router = express.Router()

    private matchController: MatchController;

    constructor() {
        this.matchController = new MatchController();
        this.initRoutes();
    }

    initRoutes() {
        this.routes.get("/matchs/:date", (request: express.Request, response: express.Response) => {
            const date: number = Date.parse(request.params.date);
            const playerId: number = request.query.playerId;
            this.matchController.getMatchesByDayAndPlayer(date, playerId)
                .then(matchs => {
                    response.send(matchs)
                })
        });

        this.routes.get("/matchs", (request: express.Request, response: express.Response) => {
        });

        this.routes.get("/matchs/:id", (request: express.Request, response: express.Response) => {
        });

    }

    getRoutes(): express.Router {
        return this.routes;
    }

}

