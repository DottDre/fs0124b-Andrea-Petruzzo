import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isCollapsed = true;
  show:boolean = false
  isUserLoggedIn:boolean = false;
  user:Users|undefined;
  constructor(private authSvc:AuthService){}

  ngOnInit(){

    this.authSvc.isLoggedIn$.subscribe(data => {

      this.isUserLoggedIn = data;

    })
    this.authSvc.user$.subscribe(user => {


      this.user = user || undefined;

    })

  }
}


