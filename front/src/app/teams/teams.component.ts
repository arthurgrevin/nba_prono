import { Component, OnInit,Input,Output,OnChanges } from '@angular/core';
import {TeamService} from '../services/team.service'
import {Team} from "../entities/team"

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit,OnChanges {
  
  
  @Input() teams:Array<Team>;
  pointorTeam:number=0;
  pointedTeams:Array<Team>;
  error : any;
  constructor( private teamService: TeamService) {
   
   }
   moveLeftPointedTeams(event){
     this.pointorTeam --;
     if(this.pointorTeam <0){
       this.pointorTeam = 27 + this.pointorTeam;
     }
     this.pointorTeam = this.pointorTeam%28;
     console.log(this.pointorTeam)
     this.pointedTeams = this.pop5Team(); 
   }

   moveRightPointedTeams(event){
     this.pointorTeam ++;
     this.pointorTeam = this.pointorTeam%28;
     console.log(this.pointorTeam)
     this.pointedTeams = this.pop5Team();  
   }
   pop5Team(){
     let i = this.pointorTeam;
     let teams = [];
     for (i;i<this.pointorTeam+6;i++){
       let a = i%28
       teams.push(this.teams[a]);
     }
     return teams;
   }

  ngOnChanges() {
    if(this.teams.length>0){
      // changes.prop contains the old and the new value...
      this.pointedTeams = this.pop5Team();
      console.log(this.pointedTeams);
    }
}
  ngOnInit(): void {
    
  }

}
