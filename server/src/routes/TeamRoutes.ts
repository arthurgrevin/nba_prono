import * as express from "express";
import { Team } from "../entities/Team";
import { TeamDAO } from "../dao/TeamDAO";
import { connection } from "../dao/database";

export class TeamRoutes {

    private routes: express.Router = express.Router();
    private teamDAO: TeamDAO;
    constructor() {
        this.initRoutes();
        this.teamDAO = new TeamDAO(connection);

    }

    initRoutes() {
        this.routes.get("/teams/", (request: express.Request, response: express.Response) => {
            this.teamDAO
                .findAllTeams()
                .then(teams => {
                    response.send(teams);
                });
        });

        this.routes.get("/teams/:key", (request: express.Request, response: express.Response) => {
            const key = request.params.key;

            this.teamDAO
                .findTeamById(key)
                .then(team => {
                    response.json(team);
                })
        });


    }

    getRoutes(): express.Router {
        return this.routes;
    }
}