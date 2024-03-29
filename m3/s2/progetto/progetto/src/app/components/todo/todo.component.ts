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
  @Input() query!: string


  constructor(private todoSvc: TodoService) { }

  ngOninit(): void {
    this.todos = this.todoSvc.filterQuery(this.query?.toLowerCase() || "")

  }

  toggle(id: number) {
    this.todoSvc.toggle(id)
  }

}


