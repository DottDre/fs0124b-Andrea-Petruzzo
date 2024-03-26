import { ArticoliService } from './../../articoli.service';
import { Component } from '@angular/core';
import { article } from '../../models/nb1';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
  post!: article;
  related!: article[];


  constructor(private PostSvc:ArticoliService) {
    this.post = this.PostSvc.getTopPost()
    this.related = this.PostSvc.getRandomPosts(4)
  }
  editPost() {
    alert("modifica applicata")
  }


}
