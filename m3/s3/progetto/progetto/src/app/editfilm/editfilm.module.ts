import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditfilmRoutingModule } from './editfilm-routing.module';
import { EditfilmComponent } from './editfilm.component';


@NgModule({
  declarations: [
    EditfilmComponent
  ],
  imports: [
    CommonModule,
    EditfilmRoutingModule
  ]
})
export class EditfilmModule { }
