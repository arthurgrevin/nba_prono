import * as express from "express";
import { teamMap, teams } from "../entities/Team";


export class TeamRoutes {

    private routes: express.Router = express.Router()
    constructor() {
        this.initRoutes();

    }

    initRoutes() {
        this.routes.get("/teams/", (request: express.Request, response: express.Response) => {
            response.send(teams);
        });

        this.routes.get("/teams/:name", (request: express.Request, response: express.Response) => {
            const name = request.params.name;
            if (teamMap[name]) {
                response.json(teamMap[name]);
            } else {
                response.sendStatus(500);
            }

        });
    }

    getRoutes(): express.Router {
        return this.routes;
    }
}