import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from "../services/match.service";
import { PronoService } from "../services/prono.service"
import { Match } from "../entities/match";
import { Team } from "../entities/team";
import { Prono } from "../entities/prono";
import { Player } from "../entities/player";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-matchs',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})


export class MatchPageComponent implements OnInit {
  @Input()
  matches: Match[];
  teamActive: Map<Team, boolean>
  displayMatchs: Match[];
  date: Date;
  player: Player = {
    id: 1,
    password: "test",
    score: 15,
    username: "Arthur"
  }
  error: any;

  constructor(private matchService: MatchService, private pronoService: PronoService) {
  }

  getMatchsNotFinish(): void {
    this.displayMatchs = this.matches.filter(x => !x.winner)
  }

  getMatchs(): void {
    this.matchService.getMatchs()
      .then(
      matchs => {
        this.matches = matchs;
        this.displayMatchs = this.matches;
      }
      )
  };




  private updateMatch(prono: Prono, oldProno?: Prono) {
    console.log(oldProno);
    if (oldProno && oldProno.id) {
      this.pronoService.deleteProno(oldProno.id);
    }
    if (prono) {
      this.pronoService.saveProno(prono)
    }

  }

  private toggleSelection(match: Match, team: Team) {

    let newProno: Prono = {
      choice: team.key,
      match: match,
      player: this.player
    }
    let oldProno: Prono;
    if (match.pronos.length > 0) {
      oldProno = match.pronos[0]
    }
    console.log(newProno);
    console.log(oldProno);
    if (oldProno && newProno.choice == oldProno.choice) {
      console.log("why")
      newProno = undefined
      match.pronos = []
    } else {
      match.pronos = [newProno]
    }
    this.updateMatch(newProno, oldProno)
    console.log(match)
  }

  private getMatchsByDate(date: Date) {
    this.date.setHours(0, 0, 0, 0);
    return this.matchService.getMatchByDate(this.date)
      .subscribe(matches => {
        this.matches = matches;
      })
  }

  private teamIsChosen(match, team) {
    if (match.pronos.length > 0) {
      return match.pronos[0].choice == team.key;
    }
    return false;
  }

  private nextDate() {
    let newDate = new Date();
    newDate.setDate(this.date.getDate() + 1);
    this.date = newDate;
    this.getMatchsByDate(this.date);
  }

  private previousDate() {
    let newDate = new Date();
    newDate.setDate(this.date.getDate() - 1);
    this.date = newDate;
    this.getMatchsByDate(this.date);
  }

  ngOnInit() {
    this.date = new Date()
    this.getMatchsByDate(this.date);
  }

}
