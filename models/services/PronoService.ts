
import {Prono} from "../entity/Prono"
import {Connection} from "typeorm"


 export function findAllProno(connection:Connection):Promise<Prono[]>{
        return connection.getRepository(Prono).find();
    }

export function findPronoById(connection:Connection,id:number):Promise<Prono>{
        return connection.getRepository(Prono).findOneById(id);
    }

export function saveProno(connection:Connection,prono:Prono){
        connection.getRepository(Prono).persist(prono)
    }

export function deleteProno(connection:Connection,prono:Prono){
        connection.getRepository(Prono).remove(prono)
    }
