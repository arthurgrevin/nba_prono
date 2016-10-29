import { Component, OnInit } from '@angular/core';
import {TeamService} from './team.service'

export interface Team {
  name :string;
  city : string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams : Array<Team>;
  error : any;
  constructor( private teamService: TeamService) {
   
   }

   getTeams(): void{
     let t = this.teamService
      .getHeroes()
      console.log(t)
      t.then(x=>this.teams = x);
   }
  ngOnInit(): void {
   console.log("start Teams");
    this.getTeams();
}

}
