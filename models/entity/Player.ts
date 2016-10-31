import {Table,Column,PrimaryGeneratedColumn,OneToMany} from "typeorm";
import {Prono} from "./Prono"

@Table()
export class Player{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username : string;

    @Column()
    password : string;

    @Column()
    score : number;
 /**   
    @OneToMany(type => Prono, prono => prono.player)
    pronos : Prono;
    */

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