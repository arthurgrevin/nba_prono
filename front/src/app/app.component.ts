import { Component,OnInit } from '@angular/core';
import {Team} from './entities/team'
import {Match} from './entities/match'
import {TeamService} from './services/team.service'
import {MatchService} from './services/match.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  teams:Team[];
  matchs:Match[];

  constructor(private teamService :TeamService,
              private matchService : MatchService
              ){

  }
   ngOnInit(){
   }
  
}
