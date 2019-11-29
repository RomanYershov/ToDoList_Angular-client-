import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestOptions, Headers, Http } from '@angular/http';
import { User } from '../models/user';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()

export class LoginService {
  userToken: string;
  isLoginSuccess: boolean;
  loginMessage: string;
  


  constructor(private http: HttpClient, private router: Router) { }

  private setHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }


  AddAccount(user: User) {
    const body = { Login: user.login, Password: user.password, Role: "user" };
    const headers = this.setHeaders();

    return this.http.post("https://localhost:5001/api/adduser", body, { headers: headers })
      .subscribe((data: any) => {
        if (data.IsSuccess) {
          this.userToken = data.Data.Token;
          localStorage.setItem("accessToken", this.userToken);
          this.isLoginSuccess = true;
          this.loginMessage = `Вы вошли как ${data.Data.Login}`
          this.router.navigate(['todo'])
        }
        else {
          this.isLoginSuccess = false;
          this.loginMessage = data.ErrorText;
        }
      })
  }

  LogIn(user: User) {
    const body = { Login: user.login, Password: user.password, Role: "user" };
    const headers = this.setHeaders();

    return this.http.post("https://localhost:5001/api/gettoken", body, { headers: headers })
    .subscribe((data: any) => {
      if (data.IsSuccess) {
        this.userToken = data.Data.Token;
        localStorage.setItem("accessToken", this.userToken);
        this.isLoginSuccess = true;
        this.loginMessage = `Вы вошли как ${data.Data.Login}`;
        this.router.navigate(['todo'])
      }
      else {
        this.isLoginSuccess = false;
        this.loginMessage = data.ErrorText;
      } console.log(data)
    })
  }

  LogOut(){
    localStorage.clear();
    this.router.navigate([''])
  }




}
