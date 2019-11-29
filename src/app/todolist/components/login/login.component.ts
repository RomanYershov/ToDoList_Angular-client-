import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  userToken: any;
  isLoginError: boolean;
  loginMessage: string;

  @Output() public outToParent = new EventEmitter();

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }


  LogIn() { console.log(this.user)
    this.loginService.LogIn(this.user);
  }

  private getTodos() {
    this.outToParent.emit(true);
  }

}
