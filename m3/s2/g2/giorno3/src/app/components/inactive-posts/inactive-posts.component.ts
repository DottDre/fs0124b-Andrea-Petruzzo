import { Component } from '@angular/core';
import { article } from '../../models/nb1';
import { ArticoliService } from '../../articoli.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  posts!: article[];
  constructor(private postSvc:ArticoliService) {
    this.posts = this.postSvc.getInactivePosts()
  }
}
