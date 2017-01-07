import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Prono} from "../entities/prono";
import {Observable} from 'rxjs/Rx';


@Injectable()
export class PronoService {

  constructor(private http:Http) { }

  getPronos():Promise<Prono[]>{
      return this.http.get("http://localhost:3000/api/v1/pronos")
        .toPromise()
        .then(response=>response.json() as Prono[])
  }
}
