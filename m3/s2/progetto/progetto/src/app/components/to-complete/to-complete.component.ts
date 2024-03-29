import { Component } from '@angular/core';
import { Todo } from '../../interface/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-to-complete',
  templateUrl: './to-complete.component.html',
  styleUrl: './to-complete.component.scss'
})
export class ToCompleteComponent {
  todos!: Todo[]
  constructor(private todoSvc: TodoService) { }
  ngOnInit(): void {
    this.todos = this.todoSvc.toComplete()
  }
}

