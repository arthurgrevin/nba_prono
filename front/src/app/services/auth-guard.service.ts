import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(localStorage.getItem('currentPlayer'))
    if (localStorage.getItem('currentPlayer')) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    return false;
  }
}
