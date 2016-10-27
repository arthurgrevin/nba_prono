import {IMatch} from "./Match";
import {ITeam} from "./Team";

export interface IProno {
    match:IMatch,
    choice:ITeam,
    valid:boolean
} 