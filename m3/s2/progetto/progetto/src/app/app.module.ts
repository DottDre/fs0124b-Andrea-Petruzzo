import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CompleteComponent } from './components/complete/complete.component';
import { ToCompleteComponent } from './components/to-complete/to-complete.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UserComponent,
    HomepageComponent,
    CompleteComponent,
    ToCompleteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
