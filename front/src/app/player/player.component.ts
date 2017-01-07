import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../services/player.service"
import {Prono} from "../entities/prono";
import {Player} from "../entities/player";


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players : Array<Player>;
  error:any;
  constructor(private playerService:PlayerService) { }

  getPlayers(){
    this.playerService.getPlayers()
      .then(players => this.players = players)
  }

  ngOnInit() {
    this.getPlayers();
  }

}
