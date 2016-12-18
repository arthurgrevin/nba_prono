import { Component, OnInit,Input } from '@angular/core';
import {MatchService} from "../match.service"
import {Match} from "../models/match"



@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})


export class MatchsComponent implements OnInit {
  @Input()
  matchs:Match[];

  displayMatchs : Match[];
  error : any;

  constructor(private matchService:MatchService) {}

  getMatchsNotFinish():void{
   this.displayMatchs = this.matchs.filter(x=> !x.winner)
  }

  getMatchs():void{
    this.matchService.getMatchs()
      .then(
        matchs=>{
          this.matchs = matchs;
          this.displayMatchs = this.matchs;
      }
      )
  };
  ngOnInit() {
    this.getMatchs();
  }

}
