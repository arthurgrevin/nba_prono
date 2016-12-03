import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Player} from "./player/player.component"
import {Observable} from 'rxjs/Rx';


@Injectable()
export class PlayerService {

  private url : string = "/api/v1/players";

  constructor(private http:Http) { }

  getPlayers():Promise<Player[]>{
    return this.http
    .get(this.url)
    .toPromise()
    .then(response=>response.json() as Player[])
  }
}
