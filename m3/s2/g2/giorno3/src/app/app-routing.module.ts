import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'active',
    component: ActivePostsComponent
  },
  {
    path:'inactive',
    component: InactivePostsComponent
  },
  {
    path: "post/:id",
    component: PostDetailComponent
  },
  {
    path: "single-post",
    component: SinglePostComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
