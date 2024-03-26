import { Component, OnInit } from '@angular/core';
import { article } from '../../models/nb1';
import { ArticoliService } from '../../articoli.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  posts: article[] = [];

  constructor(private postSvc:ArticoliService) {
    this.posts = this.postSvc.getActivePosts()
  }

}
