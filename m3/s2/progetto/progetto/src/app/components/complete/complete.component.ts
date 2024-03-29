import { Component } from '@angular/core';
import { Todo } from '../../interface/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.scss'
})
export class CompleteComponent {
  todos!: Todo[]
  constructor(private todoSvc: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoSvc.complete()
  }

}
