import { Component, OnInit } from '@angular/core';
import {Match} from "../models/match"
import {Player} from "../player/player.component"
import {PronoService} from "./prono.service"

export interface Prono{
  id:number;
  choice:string;
  match:Match;
  player:Player;
}

@Component({
  selector: 'app-pronos',
  templateUrl: './pronos.component.html',
  styleUrls: ['./pronos.component.css']
})
export class PronosComponent implements OnInit {

  pronos: Prono[];
  constructor(private pronoService : PronoService) {
     
   }

   getPronos(){
     this.pronoService.getPronos()
      .then(pronos=>this.pronos = pronos)
   }
  ngOnInit() {
    this.getPronos();
  }

}
