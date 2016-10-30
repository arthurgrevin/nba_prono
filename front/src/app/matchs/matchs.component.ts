import { Component, OnInit } from '@angular/core';
import {MatchService} from "./match.service"
export interface Match{
  id:number;
  away:string;
  home:string;
  date:Date;
}

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})


export class MatchsComponent implements OnInit {

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
