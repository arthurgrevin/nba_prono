
import * as http from "http";

import * as express from "express";
import bodyParser = require('body-parser');
import "reflect-metadata";

import { MatchRoutes } from "./routes/MatchRoutes";
import { TeamRoutes } from "./routes/TeamRoutes";
import { PlayerRoutes } from "./routes/PlayerRoutes";
import { PronoRoutes } from "./routes/PronoRoutes";
import { Match } from "./entities/Match"
import { MatchDAO } from "./dao/MatchDAO"
import { connection } from "./dao/database"
const hello: string = "Hello";
const api_url = "/api/v1/";

const app: express.Application = express();
app.use(express())
app.use(bodyParser.json())


/*
First Use Uncomment this part
*/
const nba_matchs: any[] = require("./entities/data/game_nba.json")
nba_matchs.forEach(m => {
    let match = new Match();
    match.away = m.away;
    match.home = m.home;
    match.date = m.Date;

    if (m.awayScore && m.homeScore) {
        match.winner = m.homeScore > m.awayScore ? m.home : m.away;
        console.log(match)
    }
    let matchDAO = new MatchDAO(connection);
    matchDAO.saveMatch(match)
})

const matchRoute = new MatchRoutes();
const teamRoutes = new TeamRoutes();
const playerRoutes = new PlayerRoutes();
const pronoRoutes = new PronoRoutes();
app.use(api_url, matchRoute.getRoutes());
app.use(api_url, teamRoutes.getRoutes());
app.use(api_url, playerRoutes.getRoutes());
app.use(api_url, pronoRoutes.getRoutes())

console.log(hello);


const server: http.Server = app.listen(8080);
