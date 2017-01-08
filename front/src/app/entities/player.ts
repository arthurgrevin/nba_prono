import {Prono} from "./prono"

export interface Player{
  id:number;
  username:string;
  password:string;
  score:number;
  pronos?: Prono[]
} 