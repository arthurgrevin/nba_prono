import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Team} from "./models/team"
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TeamService {


  constructor(private http: Http){ }

  getHeroes(): Promise<Team[]> {
        return this.http
      .get("http://localhost:3000/api/v1/teams")
      .toPromise()
      .then(response => response.json() as Team[])
}


}
