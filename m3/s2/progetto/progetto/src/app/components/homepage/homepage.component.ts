
import { Component } from '@angular/core';
import { Todo } from '../../interface/todo';
import { TodoService } from '../../service/todo.service';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  todos!:Todo[]

  constructor(private todoSvc: TodoService, private UserSvc:UserService) { }
  ngOnInit(): void {
    this.todos = this.todoSvc.getAll()

  }

}
