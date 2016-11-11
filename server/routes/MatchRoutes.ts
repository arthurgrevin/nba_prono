import * as express from "express";
import { connection } from "../dao/database"
import { MatchDAO } from "../dao/MatchDAO"



export class MatchRoutes {

    private routes: express.Router = express.Router()

    private matchDAO: MatchDAO = new MatchDAO(connection);

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.routes.get("/matchs/", (request: express.Request, response: express.Response) => {
            this.matchDAO.findMatches()
                .then(matchs => {
                    response.send(matchs);
                });
        });

        this.routes.get("/matchs/:id", (request: express.Request, response: express.Response) => {
            const id: number = Number.parseInt(request.params.id);
            this.matchDAO.findMatchesById(id)
                .then(matchs => {
                    response.send(matchs);
                });
        });
    }

    getRoutes(): express.Router {
        return this.routes;
    }

}

