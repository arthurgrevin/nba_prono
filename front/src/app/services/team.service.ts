import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Team } from "../entities/team"
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TeamService {

  private url: string = "/api/v1/teams";

  constructor(private http: Http) { }
  
  getHeroes(): Promise<Team[]> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(response => response.json() as Team[])
  }


}
