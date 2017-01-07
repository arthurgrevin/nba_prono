import { Component, OnInit,Input } from '@angular/core';
import {MatchService} from "../services/match.service";
import {Match} from "../entities/match";
import {Team} from "../entities/team";
import {Prono} from "../entities/prono";

@Component({
  selector: 'app-matchs',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})


export class MatchPageComponent implements OnInit {
  @Input()
  matches:Match[];
  teamActive:Map<Team,boolean>
  displayMatchs : Match[];
  date:Date;
  error : any;

  constructor(private matchService:MatchService) {
 }

  getMatchsNotFinish():void{
   this.displayMatchs = this.matches.filter(x=> !x.winner)
  }

  getMatchs():void{
    this.matchService.getMatchs()
      .then(
        matchs=>{
          this.matches = matchs;
          this.displayMatchs = this.matches;
      }
      )
  };

  private toggleSelection(match:Match,team:Team){
     let newProno:Prono = {
       choice:team.key
     }
     match.pronos=[newProno]
     console.log(match)
  }

  private getMatchsByDate(date:Date):Promise<any>{
    this.date.setHours(0,0,0,0);
    return this.matchService.getMatchByDate(this.date)
        .then(matches =>{
          this.matches = matches;
        })
  }

  private teamIsChosen(match,team){
    if(match.pronos){
      return match.pronos[0].choice == team.key;
    }
  }

  private nextDate(){
    let newDate = new Date();
    newDate.setDate(this.date.getDate()+1);
    this.date = newDate;
    this.getMatchsByDate(this.date);
  }

  private previousDate(){
    let newDate = new Date();
    newDate.setDate(this.date.getDate()+1);
    this.date = newDate;
    this.getMatchsByDate(this.date);
  }

  ngOnInit() {
    this.date = new Date()
    this.getMatchsByDate(this.date);
  }

}
