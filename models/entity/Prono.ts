import {Table,Column,PrimaryGeneratedColumn,ManyToOne} from "typeorm";
import {Match} from "./Match"
import {Player} from "./Player"

@Table()
export class Prono{

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => Match,match =>match.pronos)
    match : Match;

    @Column()
    choice : string;

    @Column()
    valid : boolean;
/*
    @ManyToOne(type => Player, player => player.pronos)
    player : Player;
    */
}
/*
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
}*/