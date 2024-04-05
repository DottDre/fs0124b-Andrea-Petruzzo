import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisteredRoutingModule } from './user-registered-routing.module';
import { UserRegisteredComponent } from './user-registered.component';


@NgModule({
  declarations: [
    UserRegisteredComponent
  ],
  imports: [
    CommonModule,
    UserRegisteredRoutingModule
  ]
})
export class UserRegisteredModule { }
