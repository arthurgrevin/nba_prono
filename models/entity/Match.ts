import {Table,Column,PrimaryGeneratedColumn,OneToMany} from "typeorm";
import {Prono} from "./Prono"

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
    
    @OneToMany(type => Prono,prono => prono.match)
    pronos : Prono;

    @Column()
    date: Date;

    

    
}



