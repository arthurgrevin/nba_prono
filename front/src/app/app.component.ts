import { Component,OnInit } from '@angular/core';
import {Team} from './models/team'
import {Match} from './models/match'
import {TeamService} from './team.service'
import {MatchService} from './match.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'NBA!';
  teams:Team[];
  matchs:Match[];

  constructor(private teamService :TeamService,
              private matchService : MatchService
              ){

  }
   getTeams(): void{
     let t = this.teamService
      .getHeroes()
      t.then(x=>{
        this.teams = x;
        console.log(this.teams);
    });

   }
    getMatchs():void{
    this.matchService.getMatchs()
      .then(
        matchs=>{
          this.matchs = matchs;
        }
      )
  };


   ngOnInit(){
     this.getTeams();
   }
  
}
