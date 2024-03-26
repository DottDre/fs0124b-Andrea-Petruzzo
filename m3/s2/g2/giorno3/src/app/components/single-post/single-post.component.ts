import { Component, Input } from '@angular/core';
import { article } from '../../models/nb1';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  @Input() post!:article
  edit: Boolean = false
  toggleEdit() {
    this.edit = !this.edit
  }
}
