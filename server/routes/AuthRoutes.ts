import * as express from "express";
import { connection } from "../dao/database";
import { PlayerDAO } from "../dao/PlayerDAO";
import { Player } from "../entities/Player";
import * as jwt from "jsonwebtoken";
export class AuthRoutes{

    private routes : express.Router = express.Router();
    private playerDAO :PlayerDAO = new PlayerDAO(connection);
    
    constructor(){
        this.initRoutes();
    }

    private initRoutes(){
        this.routes.post("/authenticate",(request:express.Request,response:express.Response)=>{
                const username = request.body.username
                const password = request.body.password
                console.log(username)
                this.playerDAO.findAllPlayer()
                    .then(players=>{
                        console.log(players)
                        return this.filterPlayer(players,username);
                    })
                    .then(filterPlayers=>{
                        console.log(filterPlayers.length)
                        if(filterPlayers){
                            const player = filterPlayers[0];
                            const token = jwt.sign(player,'test',{
					            expiresIn: 86400 // expires in 24 hours
				            });
                            let payload = {
                                "username":username,
                                "jwt":token
                            } 
                            return response.send(payload)
                        }else{
                            response.send("Authentification failed !")
                        }
                    })
                
        });
    }

    private filterPlayer(players,username):Array<Player>{
        return players.filter(player=>{
            return player.username == username
        })
    }

    getRoutes(){
        return this.routes;
    }
}