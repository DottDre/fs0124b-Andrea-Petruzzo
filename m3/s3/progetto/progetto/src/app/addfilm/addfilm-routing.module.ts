import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfilmComponent } from './addfilm.component';

const routes: Routes = [{ path: '', component: AddfilmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddfilmRoutingModule { }
