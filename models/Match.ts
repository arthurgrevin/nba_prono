import {ITeam} from "./Team";
import {Table,Column,PrimaryGeneratedColumn} from "typeorm";
import {createConnection} from "typeorm";
 

@Table()
export class Match {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    home: string;
    
    @Column()
    away: string;
    
    @Column()
    winner: string;
    
    
    @Column()
    date: Date;

  

    
}
/*
export function findMatches(){
    connection.then(connection => {
    
    let matchRepository = connection.getRepository (Match);
    
    let matchs = matchRepository.find();
    console.log(matchs);
    return matchs;
    // here you can start to work with your entities
});
}

*/