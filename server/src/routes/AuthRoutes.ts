import * as express from "express";
import { AuthController } from "../controller/AuthController";
export class AuthRoutes {

    private routes: express.Router = express.Router();
    private authController: AuthController;
    constructor() {
        this.initRoutes();
        this.authController = new AuthController();
    }

    private initRoutes() {
        this.routes.post("/authenticate", (request: express.Request, response: express.Response) => {
            const username = request.body.username;
            const password = request.body.password;
            this.authController.login(username, password)
                .then(payload => {
                    if (payload) {
                        console.log(payload);
                        response.status(200).send(payload);
                    }
                })
                .catch(err => {
                    response.status(401).send("wrong username/password");
                })
        });
    }



    getRoutes() {
        return this.routes;
    }
}