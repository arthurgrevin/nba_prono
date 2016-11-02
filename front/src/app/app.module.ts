import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {TeamService} from './team.service';
import {MatchService} from './match.service';
import {PlayerService} from "./player.service"
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchsComponent } from './match/matchs.component';
import { AdminComponent } from './admin/admin.component';
import { PlayerComponent } from './player/player.component';
import { PronosComponent } from './pronos/pronos.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    MatchsComponent,
    AdminComponent,
    PlayerComponent,
    PronosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'admin',
      component:AdminComponent},{
        path:"",
        component:MatchsComponent
      }
    ])
  ],
  providers: [
    TeamService,
    MatchService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
