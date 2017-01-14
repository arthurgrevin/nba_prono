
import { Prono } from "../entities/Prono"
import {Match} from "../entities/Match"
import { Connection } from "typeorm"
import { connection } from "./database"


export class PronoDAO {


    constructor(private connection: Promise<Connection>) {

    }

    findAllProno(): Promise<Prono[]> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Prono)
                    .find({
                        alias: "prono",
                        leftJoinAndSelect: {
                            "match": "prono.match",
                            "player": "prono.player",
                        }
                    });
            });
    }

    findPronoById(id: number): Promise<Prono> {
        return this.connection
            .then(connection => {
                return connection.getRepository(Prono)
                    .findOneById(id, {
                        alias: 'prono',
                        innerJoinAndSelect: {
                            "match": "prono.match",
                            "player": "prono.player"
                        }
                    });
            });
    }
    findPronoByMatch(match:Match):Promise<Prono[]>{
        return this.connection
                .then(connection=>{
                    return connection.getRepository(Prono)
                        .createQueryBuilder('prono')
                        .where("prono.match == match",{match:match})
                        .getMany()
                })
    }
    saveProno(prono: Prono): Promise<any> {
        console.log(prono);
        return this.connection
            .then(connection => {
                return connection.getRepository(Prono)
                    .persist(prono);
            });
    }

    deleteProno(prono: Prono): Promise<any> {
        return this.connection.then(connection => {
            return connection.getRepository(Prono)
                .remove(prono);
        });
    }
}

