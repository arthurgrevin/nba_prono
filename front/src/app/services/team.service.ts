import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Team } from "../entities/team"
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TeamService {

  private url: string = "/api/v1/teams";

  constructor(private http: Http) { }
  
  getTeams(): Promise<Team[]> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(response => response.json() as Team[])
  }

  getTeam(key:string):Promise<Team>{
    let url = this.url + "/"+key
    return this.http
        .get(url)
        .toPromise()
        .then(response=>{
          return response.json() as Team
        })
  }

}
