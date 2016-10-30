import { Component, OnInit } from '@angular/core';
import {TeamService} from './team.service'
export interface Team {
  name :string;
  city : string;
  logo : string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams : Array<Team>;
  pointedTeams :Array<Team>;
  pointor:number = 0;
  error : any;
  constructor( private teamService: TeamService) {
   
   }

   getTeams(): void{
     let t = this.teamService
      .getHeroes()
      console.log(t)
      t.then(x=>{
        this.teams = x;
        this.pointedTeams = this.pop5Team();
    });
      
   }

   moveLeftPointedTeams(event){
     this.pointor --;
     if(this.pointor <0){
       this.pointor = 27 + this.pointor;
     }
     this.pointor = this.pointor%28;
     console.log(this.pointor)
     this.pointedTeams = this.pop5Team(); 
   }

   moveRightPointedTeams(event){
     this.pointor ++;
     this.pointor = this.pointor%28;
     console.log(this.pointor)
     this.pointedTeams = this.pop5Team(); 
     /**switch(this.pointor){
       case 0: this.pointedTeams = [this.teams[27],this.teams[0],this.teams[1]];
       break;
       case 27: this.pointedTeams=[this.teams[26],this.teams[27],this.teams[0]];
       break;
       default : this.pointedTeams = this.teams.slice(this.pointor-1,this.pointor+2);
    }**/
    
     
   }
   pop5Team(){
     let i = this.pointor;
     let teams = [];
     for (i;i<this.pointor+6;i++){
       let a = i%28
       teams.push(this.teams[a]);
     }
     return teams;
   }
  
  ngOnInit(): void {
   console.log("start Teams");
    this.getTeams();
}

}
