import { Component, OnInit } from '@angular/core';
import {PlayerService} from "./player.service"
import {Prono} from "../pronos/pronos.component"
export interface Player{
  id:number;
  username:string;
  password:string;
  score:number;
  pronos : Prono[]
} 

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
