import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { CarrelloComponent } from './components/carrello/carrello.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'preferiti/:id',
    component:PreferitiComponent
  },
  {
    path:'carrello',
    component:CarrelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
