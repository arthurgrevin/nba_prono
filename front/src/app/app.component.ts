import { Component,OnInit } from '@angular/core';
import {Team} from './models/team'
import {TeamService} from './team.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'NBA!';
  pointorTeam :number = 0;
  teams:Team[]=[];
  pointedTeams : Team[]=[];

  constructor(private teamService :TeamService){

  }
   getTeams(): void{
     let t = this.teamService
      .getHeroes()
      t.then(x=>{
        this.teams = x;
        console.log(this.teams);
    });

   }

   ngOnInit(){
     this.getTeams();
   }
  
}
