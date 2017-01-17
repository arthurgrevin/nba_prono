import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {Match} from "../entities/match";

@Injectable()
export class MatchService {


  private url :string="/api/v1/matchs";
  constructor(private http:Http) { }

    getMatchs():Promise<Match[]>{
      return this.http
      .get(this.url,this.jwt())
      .toPromise()
      .then(response => response.json() as Match[])
  }
  
  getMatchByDate(date:Date):Observable<any>{
    const dateString = date.toISOString()
    const playerId = JSON.parse(localStorage.getItem('currentPlayer')).id
    const url = this.url + "/" + dateString + "?playerId="+playerId
    console.log(this.jwt())
    return this.http.get(url,this.jwt())
        .map(response=>{
          return response.json() as Match[]
        })
        .catch((e)=>{
          this.handleError(e)
          return null;
        });
  }

  private handleError(e){
    if(e.status==401){
      localStorage.removeItem('currentPlayer');
    }
  }

  private jwt(){
    let currentPlayer= JSON.parse(localStorage.getItem('currentPlayer'));
    console.log(JSON.parse(localStorage.getItem('currentPlayer')));
    console.log(currentPlayer);
    if(currentPlayer){
      const headers = new Headers({ 'x-access-token': currentPlayer.jwt });
      return new RequestOptions({ headers: headers });
    }
  }

}
