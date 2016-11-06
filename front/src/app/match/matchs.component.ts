import { Component, OnInit,Input } from '@angular/core';
import {MatchService} from "../match.service"
import {Match} from "../models/match"

import {
  TableOptions,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';

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

   options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 'auto',
    limit: 10,
    columns: [
      new TableColumn({ prop: 'date' }),
      new TableColumn({ name: 'home' }),
      new TableColumn({ name: 'away' }),
      new TableColumn({name : 'winner' })
    ]
  });

  getMatchsNotFinish():Match[]{
   return this.matchs.filter(x=> !x.winner)
  }

  getMatchs():void{
    this.matchService.getMatchs()
      .then(
        matchs=>{
          this.matchs = matchs;
          this.displayMatchs = this.getMatchsNotFinish();
      }
      )
  };
  ngOnInit() {
    this.getMatchs();
  }

}
