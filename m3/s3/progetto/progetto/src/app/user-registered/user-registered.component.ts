import { Component } from '@angular/core';
import { GlobalService} from '../global.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-user-registered',
  templateUrl: './user-registered.component.html',
  styleUrl: './user-registered.component.scss'
})
export class UserRegisteredComponent {

  users: Users[]=[];

  constructor(private usersSvc: GlobalService) { }

  ngOnInit(): void {
    this.usersSvc.$users.subscribe(users => {
      this.users = users;
    });
  }
}
