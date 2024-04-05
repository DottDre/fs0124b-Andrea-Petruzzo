import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisteredComponent } from './user-registered.component';

const routes: Routes = [{ path: '', component: UserRegisteredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegisteredRoutingModule { }
