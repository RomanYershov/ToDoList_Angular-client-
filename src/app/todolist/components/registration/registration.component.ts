import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();

  
  constructor( private loginService: LoginService) { }

  ngOnInit() {
  }

  Registration(){
    console.log(this.user)
     this.loginService.AddAccount(this.user);
  }

}
