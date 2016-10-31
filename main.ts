
import * as http from "http";

import express = require("express");
import {teamMap,teams} from "./models/entity/Team";
import  "reflect-metadata";

import {Match} from "./models/entity/Match";
import {Player} from"./models/entity/Player"
import {Prono} from "./models/entity/Prono";
import {connection} from "./models/database"


import {findMatches,saveMatch,findMatchById} from "./models/services/MatchService";
import {findAllProno,saveProno,deleteProno,findPronoById} from "./models/services/PronoService";
import {findAllPlayer,deletePlayer,savePlayer,findPlayerById} from "./models/services/PlayerService"

const hello : string = "Hello";

const app: express.Application = express();

let match = new Match();
match.away ="knicks";
match.home="celtics";
match.winner="knicks";
match.date=new Date();
saveMatch(match)


/**
 * TEAM ROUTE
 */

app.get("/api/v1/teams", (request: express.Request, response: express.Response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.json(teams.teams);
});

app.get("/api/v1/teams/:name",(request:express.Request, response: express.Response)=>{
    const name = request.params.name;
    response.header("Access-Control-Allow-Origin", "*");
    response.json(teamMap[name]);
});

/**
 * PLAYER ROUTE
 */

app.get("/api/v1/players/",(request: express.Request, response: express.Response)=>{
   response.header("Access-Control-Allow-Origin", "*");
   findAllPlayer().then(players =>response.json(players));
   
});

app.get("/api/v1/players/:id",(request:express.Request, response: express.Response)=>{
    const id :number = Number.parseInt(request.params.id);
   response.header("Access-Control-Allow-Origin", "*");
   findPlayerById(id).then(player=>response.json(player));
});

app.post("/api/v1/players",(request: express.Request, response: express.Response)=>{
   response.header("Access-Control-Allow-Origin", "*");
});

/**
 * Match Route
 */

app.get("/api/v1/matchs/",(request: express.Request, response: express.Response)=>{
    response.header("Access-Control-Allow-Origin", "*");
    connection
   .then(connection => {
    
   let matchRepository = connection.getRepository(Match);
    matchRepository.find()
.then(matchs => response.send(matchs));
})});

app.get("/api/v1/matchs/:id",(request:express.Request, response: express.Response)=>{
    const id :number = Number.parseInt(request.params.id);
    response.header("Access-Control-Allow-Origin", "*");
    findMatchById(id).then(match=>response.send(match));
});

/**
 * Prono Route
 */

app.get("/api/v1/pronos/",(request: express.Request, response: express.Response)=>{
   response.header("Access-Control-Allow-Origin", "*");
   findAllProno().then(pronos =>response.json(pronos));
   
});

app.get("/api/v1/players/:id",(request:express.Request, response: express.Response)=>{
    const id :number = Number.parseInt(request.params.id);
   response.header("Access-Control-Allow-Origin", "*");
   findPronoById(id).then(pronos=>response.json(pronos));
});

console.log(hello);


const server: http.Server = app.listen(3000);