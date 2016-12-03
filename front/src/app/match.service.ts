import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Match} from "./models/match"
@Injectable()
export class MatchService {


  private url :string="/api/v1/matchs";
  constructor(private http:Http) { }

    getMatchs():Promise<Match[]>{
      return this.http
      .get(this.url)
      .toPromise()
      .then(response => response.json() as Match[])
}
}
