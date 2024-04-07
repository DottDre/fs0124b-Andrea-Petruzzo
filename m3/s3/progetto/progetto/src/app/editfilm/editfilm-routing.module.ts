import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditfilmComponent } from './editfilm.component';

const routes: Routes = [{ path: '', component: EditfilmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditfilmRoutingModule { }
