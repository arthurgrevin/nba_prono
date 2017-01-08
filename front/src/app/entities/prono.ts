
import {Match} from "./match";
import {Player} from "./player";

export interface Prono{
  id?:number;
  choice:string;
  match?:Match;
  player?:Player;

}