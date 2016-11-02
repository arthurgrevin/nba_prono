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
  matchs:Array<Match>;
  error : any;
  constructor(private matchService:MatchService) {}

  getMatchs():void{
    this.matchService.getMatchs()
      .then(
        matchs=>{
          this.matchs = matchs;
        }
      )
  };
  ngOnInit() {
    this.getMatchs();
  }

}
