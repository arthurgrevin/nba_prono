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
      return this.http.get("http://localhost:3000/api/v1/pronos")
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
    return this.http.post(url,payload).toPromise()
  }
  
  deleteProno(pronoID:number):Promise<any>{
    let url:string = this.url + "/" + pronoID;
    return this.http.delete(url).toPromise()
  }
}
