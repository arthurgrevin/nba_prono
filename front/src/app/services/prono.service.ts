import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Prono} from "../entities/prono";
import {Observable} from 'rxjs/Rx';


@Injectable()
export class PronoService {

  private url:string = "/api/v1/pronos"
  constructor(private http:Http) { }

  getPronos():Promise<Prono[]>{
      return this.http.get(this.url)
        .toPromise()
        .then(response=>response.json() as Prono[])
  }

  saveProno(prono:Prono):Promise<any>{
    let payload ={
      player:prono.player.id,
      match:prono.match.id,
      choice:prono.choice
    }
    let url = this.url;
    return this.http.post(url,payload,this.jwt()).toPromise()
  }
  
  deleteProno(pronoID:number):Promise<any>{
    let url:string = this.url + "/" + pronoID;
    return this.http.delete(url,this.jwt()).toPromise()
  }

    private jwt(){
    let currentPlayer= JSON.parse(localStorage.getItem('currentPlayer'));
    console.log(currentPlayer)
    if(currentPlayer){

      const headers = new Headers({ 'x-access-token': currentPlayer.jwt });
      return new RequestOptions({ headers: headers });
    }
  }
}
