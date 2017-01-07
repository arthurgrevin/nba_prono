import { Component, OnInit,Input } from '@angular/core';
import {MatchService} from "../services/match.service";
import {Match} from "../entities/match";
import {Team} from "../entities/team";


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
  private toggleSelection(event){
    
  }

  private getMatchsByDate():Promise<any>{
    this.date = new Date()
    this.date.setHours(0,0,0,0);
    return this.matchService.getMatchByDate(this.date)
        .then(matches =>{
          this.matches = matches;
        })
  }


  private static fillIsActiveMap(matches){
    let map = new Map<Team,boolean>()
    matches.foreach(match=>{
    })
  }
  ngOnInit() {
    this.getMatchsByDate();
  }

}
