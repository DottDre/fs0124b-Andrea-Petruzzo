import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { CompleteComponent } from './components/complete/complete.component';
import { ToCompleteComponent } from './components/to-complete/to-complete.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'complete',
    component: CompleteComponent
  },
  {
    path: 'to-complete',
    component: ToCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
