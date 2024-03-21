import { Component } from '@angular/core';
import { article } from '../../models/nb1';
import { ArticoliService } from '../../articoli.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  articleArr:article[] = []

  constructor(private articoliSvc: ArticoliService){}

  ngOnInit(){

    this.articoliSvc.getInactive().then(res =>{
      this.articleArr = res
    })
}
}
