import {Team} from "./team"
import {Prono} from "./prono"

export interface Match{
  id:number;
  away:Team;
  home:Team;
  winner?:Team;
  date:Date;
  pronos?:Prono[]
}