import * as express from "express";
import { teamMap, teams } from "../entities/Team";


export class TeamRoutes {

    private routes: express.Router = express.Router()
    constructor() {
        console.log("aaa")
        this.initRoutes();

    }

    initRoutes() {
        this.routes.get("/teams/", (request: express.Request, response: express.Response) => {
            response.header("Access-Control-Allow-Origin", "*");
            response.json(teams);
        });

        this.routes.get("/teams/:name", (request: express.Request, response: express.Response) => {
            const name = request.params.name;
            response.header("Access-Control-Allow-Origin", "*");
            response.json(teamMap[name]);
        });
    }

    getRoutes(): express.Router {
        return this.routes;
    }
}