import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-user-registered',
  templateUrl: './user-registered.component.html',
  styleUrl: './user-registered.component.scss'
})
export class UserRegisteredComponent {

  users: Users[]=[];

  constructor(private usersSvc: MovieService) { }

  ngOnInit(): void {
    this.usersSvc.$users.subscribe(users => {
      this.users = users;
    });
  }
}
