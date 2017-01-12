import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers:[AuthenticationService]
})
export class LoginPageComponent implements OnInit {

  private model:any={};
  private returnUrl:string;
  constructor(private authenticationService:AuthenticationService,
              private route:ActivatedRoute,
              private router:Router) {
    
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private login(username:string,password:string){
    this.authenticationService
        .login(username,password)
        .subscribe(data=>{
          this.router.navigate([this.returnUrl]);
        },err=>console.log(<any>err))
  }
  private handleLogin(){
    console.log(this.model.username)
    this.login(this.model.username,this.model.password)
  }

}
