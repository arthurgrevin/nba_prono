
import * as http from "http";

import * as express from "express";
import * as jwt from "jsonwebtoken";
import bodyParser = require('body-parser');
import "reflect-metadata";

"use strict";
import { MatchRoutes } from "./routes/MatchRoutes";
import { TeamRoutes } from "./routes/TeamRoutes";
import { PlayerRoutes } from "./routes/PlayerRoutes";
import { PronoRoutes } from "./routes/PronoRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";

import { CONF } from "./conf";
import { check_token } from "./middleware";

const hello: string = "Helloooo";
const api_url = "/api/v1/";

const app: express.Application = express();
app.use(express())
app.use(bodyParser.json())


/*
First Use Uncomment this part
*/



const matchRoute = new MatchRoutes();
const teamRoutes = new TeamRoutes();
const playerRoutes = new PlayerRoutes();
const pronoRoutes = new PronoRoutes();
const authRoutes = new AuthRoutes();
app.use(api_url, authRoutes.getRoutes());
app.use(check_token);
app.use(api_url, matchRoute.getRoutes());
app.use(api_url, teamRoutes.getRoutes());
app.use(api_url, playerRoutes.getRoutes());
app.use(api_url, pronoRoutes.getRoutes());
app.get('/', (request, response) => {
	response.send("check health")
})
console.log(hello);


const server: http.Server = app.listen(8080);
