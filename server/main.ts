
import * as http from "http";

import * as express from "express";
import bodyParser = require('body-parser');
import "reflect-metadata";

import { MatchRoutes } from "./routes/MatchRoutes";
import { TeamRoutes } from "./routes/TeamRoutes";
import { PlayerRoutes } from "./routes/PlayerRoutes";
import { PronoRoutes } from "./routes/PronoRoutes";


const hello: string = "Hello";
const api_url = "/api/v1/";

const app: express.Application = express();
app.use(express())
app.use(bodyParser.json())


/*
First Use Uncomment this part
const nba_matchs:any[] =require( "./entities/data/game_nba.json")
nba_matchs.forEach(m=>{
    let match = new Match();
    match.away = m.away;
    match.home = m.home;
    match.date = m.Date;

    if(m.awayScore && m.homeScore){
        match.winner = m.homeScore >m.awayScore ? m.home : m.away;
        console.log(match)
    }
    
    connection.then(connection =>saveMatch(connection,match))
})
*/

/**
 * TEAM ROUTE
 */
const matchRoute = new MatchRoutes();
const teamRoutes = new TeamRoutes();
const playerRoutes = new PlayerRoutes();
const pronoRoutes = new PronoRoutes();
app.use(api_url, matchRoute.getRoutes());
app.use(api_url, teamRoutes.getRoutes());
app.use(api_url, playerRoutes.getRoutes());
app.use(api_url, pronoRoutes.getRoutes())
/**
 * PLAYER ROUTE
 */



/**
 * Match Routes
 */




/*
app.get("/api/v1/matchs/:id", (request: express.Request, response: express.Response) => {
    const id: number = Number.parseInt(request.params.id);
    response.header("Access-Control-Allow-Origin", "*");
    let matchDAO = new MatchDAO(connection)
    matchDAO.findMatches()
        .then(matchs => {
            response.send(matchs);
        });
});
*/
/**
 * Prono Route
 */


/*
app.post("/api/v1/pronos/", (request: express.Request, response: express.Response) => {
    response.header("Access-Control-Allow-Origin", "*");
    const choice = request.body.choice;
    const matchId = request.body.match;
    const playerId = request.body.player;
    console.log(choice + matchId);
    let prono = new Prono();
    prono.choice = choice;
    connection.then(connection => {
        findMatchById(connection, matchId).then(m => {
            prono.match = m;
            findPlayerById(connection, playerId).then(player => {
                prono.player = player;
                saveProno(connection, prono).then(r => response.sendStatus(201))
            })
        })
    })
})
*/


console.log(hello);


const server: http.Server = app.listen(3000);
