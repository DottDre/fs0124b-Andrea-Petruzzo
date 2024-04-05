import { Component } from '@angular/core';
import { Login } from '../../models/login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login:Login = {
    email: '',
    password: ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

    signIn(){

      this.authSvc.login(this.login)
      .subscribe(data => {
        this.router.navigate(['/'])
      })

    }

}

