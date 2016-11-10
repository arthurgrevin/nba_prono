
import {Prono} from "../entities/Prono"
import {Connection} from "typeorm"


 export function findAllProno(connection:Connection):Promise<Prono[]>{
        return connection.getRepository(Prono).find(
            {
            alias: "prono",
            innerJoinAndSelect: {
            "match": "prono.match",
            "player":"prono.player",
        }
    });
    }

export function findPronoById(connection:Connection,id:number):Promise<Prono>{
        return connection.getRepository(Prono).findOneById(id,{
            alias:'prono',
            innerJoinAndSelect:{
                "match":"prono.match",
                "player":"prono.player"
            }
        });
    }

export function saveProno(connection:Connection,prono:Prono):Promise<any>{
       return connection.getRepository(Prono).persist(prono)
    }


export function deleteProno(connection:Connection,prono:Prono){
       return connection.getRepository(Prono).remove(prono)
    }
