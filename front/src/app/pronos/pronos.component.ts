import { Component, OnInit } from '@angular/core';
import {Match} from "../entities/match";
import {Player} from "../entities/player";
import {Prono} from "../entities/prono";
import {PronoService} from "../services/prono.service"



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
