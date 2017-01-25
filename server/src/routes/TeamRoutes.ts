import * as express from "express";
import { Team } from "../entities/Team";
import { TeamController } from "../controller/TeamController";

export class TeamRoutes {

    private routes: express.Router = express.Router();
    private teamController: TeamController;
    constructor() {
        this.initRoutes();
        this.teamController = new TeamController();

    }

    initRoutes() {
        this.routes.get("/teams/", (request: express.Request, response: express.Response) => {
            this.teamController
                .getTeams()
                .then(teams => {
                    response.send(teams);
                });
        });

        this.routes.get("/teams/:key", (request: express.Request, response: express.Response) => {

        });


    }

    getRoutes(): express.Router {
        return this.routes;
    }
}