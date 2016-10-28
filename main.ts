
import * as http from "http";
import express = require("express");
import {teamMap} from "./models/Team";
import  "reflect-metadata";
import {createConnection} from "typeorm";
import {Match} from "./models/Match";


const hello : string = "Hello";

const app: express.Application = express();

createConnection({
    driver: {
        type: "sqlite",
        database: "nba_prono"
    },
    entities: [
        Match
    ],
    autoSchemaSync: true,
}).then(connection => {
    
    const celtics = teamMap['Celtics'];
    const warriors = teamMap['Warriors'];
    let match = new Match();
    match.away =  celtics.name;
    match.home = warriors.name;
    match.winner = warriors.name;
    match.date = new Date();

    let matchRepository = connection.getRepository (Match);
    matchRepository.persist(match);

    // here you can start to work with your entities
});


app.get("/api/v1/teams", (request: express.Request, response: express.Response) => {
    response.json(teamMap);
});

app.get("/api/v1/teams/:name",(request:express.Request, response: express.Response)=>{
    const name = request.params('name');
    response.json(teamMap[name]);
});



console.log(hello);


const server: http.Server = app.listen(3000);