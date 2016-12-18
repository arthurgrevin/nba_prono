import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {TeamService} from './team.service';
import {MatchService} from './match.service';
import {PlayerService} from "./player.service";
import {PronoService} from './prono.service';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchsComponent } from './match/matchs.component';
import { AdminComponent } from './admin/admin.component';
import { PlayerComponent } from './player/player.component';
import { PronosComponent } from './pronos/pronos.component';
import { Angular2DataTableModule } from 'angular2-data-table';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    MatchsComponent,
    AdminComponent,
    PlayerComponent,
    PronosComponent,
    HomepageComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'matches',
      component:MatchsComponent},
      {
        path:'',
        component:HomepageComponent
      },
      {
        path:'pronos',
        component:PronosComponent
      },{
        path:'players',
        component:PlayerComponent
      }
    ]),
    Angular2DataTableModule
    ],
  providers: [
    TeamService,
    MatchService,
    PlayerService,
    PronoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
