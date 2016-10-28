import {ITeam} from "./Team";
import {Table,Column,PrimaryGeneratedColumn} from "typeorm";

 

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

