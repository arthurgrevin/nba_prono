
import {connection} from "../database"
import {Prono} from "../entity/Prono"



export function findAllProno():Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Prono).find();
        })
}

export function findPronoById(id:number):Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Prono).findOneById(id)
        }
    )
}

export function saveProno(prono:Prono){
    connection.then(
        connection => {
            connection.getRepository(Prono).persist(prono);
        })
}

export function deleteProno(prono:Prono){
    connection.then(
        connection=>{
            connection.getRepository(Prono).remove(prono);
        }
    )
}