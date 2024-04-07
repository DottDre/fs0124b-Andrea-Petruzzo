import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddfilmRoutingModule } from './addfilm-routing.module';
import { AddfilmComponent } from './addfilm.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddfilmComponent
  ],
  imports: [
    CommonModule,
    AddfilmRoutingModule,
    FormsModule
  ]
})
export class AddfilmModule { }
