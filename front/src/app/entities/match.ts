import {Team} from "./team"

export interface Match{
  id:number;
  away:Team;
  home:Team;
  winner?:Team;
  date:Date;
}