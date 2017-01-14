import {Table,Column,PrimaryGeneratedColumn,OneToMany} from "typeorm";
import {Prono} from "./Prono"

@Table()
export class Player{

    @PrimaryGeneratedColumn({unique:true})
    id?:number;

    @Column({unique:true})
    username : string;

    @Column()
    password : string;

    @Column({default:0})
    score?: number;
   
    @OneToMany(type => Prono, prono => prono.player,{cascadeAll:true})
    pronos? : Prono[];

    constructor(){
        this.score=0;
    }
}
/**
export function findAllPlayer():Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Player).find();
        })
}

export function findPlayerById(id:number):Promise<void>{
    return connection.then(
        connection=>{
            connection.getRepository(Player).findOneById(id)
        }
    )
}

export function savePlayer(player:Player){
    connection.then(
        connection => {
            connection.getRepository(Player).persist(player);
        })
}

export function deletePlayer(player:Player){
    connection.then(
        connection=>{
            connection.getRepository(Player).remove(player);
        }
    )
}**/