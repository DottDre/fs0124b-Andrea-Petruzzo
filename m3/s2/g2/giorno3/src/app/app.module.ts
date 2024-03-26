import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { BuiltInPipe } from './built-in.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    FooterComponent,
    SinglePostComponent,
    BuiltInPipe
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
