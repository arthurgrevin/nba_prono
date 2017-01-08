import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Match} from "../entities/match"
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
  
  getMatchByDate(date:Date):Promise<Match[]>{
    let dateString = date.toISOString()
    let url = this.url + "/" + dateString
    return this.http.get(url)
        .toPromise()
        .then(response=>{
          return response.json() as Match[]
        })
  }

}
