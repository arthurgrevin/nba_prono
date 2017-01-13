import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Player} from "../entities/player";

@Injectable()
export class AuthenticationService {

  private url = "/api/v1/authenticate"
  constructor(private http:Http) { }

  public login(username:string,password):Observable<any>{
    const url = this.url
    return this.http
                .post(url,{username:username,password:password})
                .map(response=>{
                  console.log(response.json())
                  localStorage.setItem('currentPlayer',JSON.stringify(response.json()))
                },err=>console.log(err))
  }
}
