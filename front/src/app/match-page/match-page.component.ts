import { Component, OnInit,Input } from '@angular/core';
import {MatchService} from "../services/match.service"
import {Match} from "../entities/match"



@Component({
  selector: 'app-matchs',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})


export class MatchPageComponent implements OnInit {
  @Input()
  matches:Match[];

  displayMatchs : Match[];
  error : any;

  constructor(private matchService:MatchService) {}

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

  private getMatchsByDate():Promise<any>{
    let date = new Date()
    date.setHours(0,0,0,0);
    console.log(date.toISOString())
    return this.matchService.getMatchByDate(date)
        .then(matches =>{
          this.matches = matches;
          console.log(this.matches)
        })
  }



  ngOnInit() {
    this.getMatchsByDate();
  }

}
