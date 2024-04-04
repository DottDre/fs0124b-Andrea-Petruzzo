import { Component } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private authSvc:AuthService){}

  user:User|undefined;

  ngOnInit(){

    this.authSvc.user$.subscribe(user => {


      this.user = user || undefined;

    })

  }
}
