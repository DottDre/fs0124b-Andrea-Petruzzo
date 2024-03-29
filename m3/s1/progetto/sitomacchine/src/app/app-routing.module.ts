import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { FordComponent } from './pages/ford/ford.component';
import { AutodetailComponent } from './pages/autodetail/autodetail.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
  {
    path:'Audi',
    component: AudiComponent
  },
  {
    path:'Fiat',
    component:FiatComponent
  },
  {
    path:'Ford',
    component:FordComponent
  },
  {
    path:'detail/:id',
    component: AutodetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
