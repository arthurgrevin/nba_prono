import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Match} from "./matchs.component"
@Injectable()
export class MatchService {

  constructor(private http:Http) { }

    getMatchs():Promise<Match[]>{
      return this.http
      .get("http://localhost:3000/api/v1/matchs")
      .toPromise()
      .then(response => response.json() as Match[])
}
}
