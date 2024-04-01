
import { Component, Input, } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos: Todo[] = []
  @Input() todo!: Todo
constructor(private todoSvc: TodoService) { }
    actived(id: number) {
    this.todoSvc.actived(id)
  }
}


