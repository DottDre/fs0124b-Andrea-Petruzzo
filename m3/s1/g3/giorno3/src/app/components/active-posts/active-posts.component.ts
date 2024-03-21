import { Component } from '@angular/core';
import { article } from '../../models/nb1';
import { ArticoliService } from '../../articoli.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {
  articleArr:article[] = []

    constructor(private articoliSvc: ArticoliService){}

    ngOnInit(){

      this.articoliSvc.getactive().then(res =>{
        this.articleArr = res
      })
}
}
