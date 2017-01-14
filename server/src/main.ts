
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
import {AuthRoutes} from "./routes/AuthRoutes";

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
app.use(function(req:express.Request, res:express.Response, next:express.NextFunction) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, 'test', function(err, decoded) {			
			if (err) {
				return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
                req['decoded'] = decoded;
                console.log(req)	
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(401).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
});
app.use(api_url, matchRoute.getRoutes());
app.use(api_url, teamRoutes.getRoutes());
app.use(api_url, playerRoutes.getRoutes());
app.use(api_url, pronoRoutes.getRoutes());
app.get('/',(request,response)=>{
    response.send("check health")
})
console.log(hello);


const server: http.Server = app.listen(8080);
