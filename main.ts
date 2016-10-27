
import * as http from "http";
import express = require("express");
import {teamMap} from "./models/Team";
import {mongoose} from "./services/database"
const hello : string = "Hello wesh";

const app: express.Application = express();



app.get("/api/v1/teams", (request: express.Request, response: express.Response) => {
    response.json(teamMap);
});

app.get("/api/v1/teams/:name",(request:express.Request, response: express.Response)=>{
    const name = request.params('name');
    response.json(teamMap[name]);
});



console.log(hello);


const server: http.Server = app.listen(3000);