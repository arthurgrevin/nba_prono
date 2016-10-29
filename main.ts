
import * as http from "http";
import express = require("express");
import {teamMap,teams} from "./models/Team";
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
    
    let matchRepository = connection.getRepository (Match);
    
    let matchs = matchRepository.find();
    console.log(matchs)
    // here you can start to work with your entities
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



console.log(hello);


const server: http.Server = app.listen(3000);