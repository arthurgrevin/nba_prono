import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TeamService} from './teams/team.service';
import {MatchService} from './matchs/match.service';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchsComponent } from './matchs/matchs.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    MatchsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TeamService,
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
