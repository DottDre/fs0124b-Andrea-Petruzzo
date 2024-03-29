import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { User } from '../../interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users!: User[]
  constructor(private todoSrv: TodoService) { }

  ngOnInit(): void {
    this.users = this.todoSrv.userMap()
  }
}


