import {ITeam} from "./Team";


export interface IMatch {
    id:number,
    home:ITeam,
    away:ITeam,
    winner:ITeam,
    date:Date
}


