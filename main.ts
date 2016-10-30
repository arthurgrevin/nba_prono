
import * as http from "http";
import express = require("express");
import {teamMap,teams} from "./models/Team";
import  "reflect-metadata";
import {Match} from "./models/Match";
import {createConnection} from "typeorm";
import {connection} from "./models/database";


const hello : string = "Hello";

const app: express.Application = express();

connection.then( connection =>{
     let match = new Match();
    match.away ="Celtics";
    match.home="Knicks";
    match.winner="Knicks";
    match.date=new Date();
    console.log(JSON.stringify(match));
    let matchRepository = connection.getRepository (Match);
    matchRepository.persist(match)
        .then(match=>console.log("match saved"));
});

app.get("/api/v1/teams", (request: express.Request, response: express.Response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.json(teams.teams);
});

app.get("/api/v1/teams/:name",(request:express.Request, response: express.Response)=>{
    const name = request.params('name');
    response.header("Access-Control-Allow-Origin", "*");
    response.json(teamMap[name]);
});


app.get("/api/v1/matchs/",(request: express.Request, response: express.Response)=>{
   let matchs: Match[];
   response.header("Content-Type","application/json")
   response.header("Access-Control-Allow-Origin", "*");
   connection
   .then(connection => {
    
   let matchRepository = connection.getRepository(Match);
    matchRepository.find()
        .then(matchs => response.send(matchs));
}   

);
    console.log("aaaaa");
});

console.log(hello);


const server: http.Server = app.listen(3000);