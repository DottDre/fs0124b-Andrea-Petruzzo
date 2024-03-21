import { Component } from '@angular/core';
import { article } from '../../models/nb1';
import { ArticoliService } from '../../articoli.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
    articleArr:article[] = []


    constructor(private articoliSvc: ArticoliService){}

    ngOnInit(){

      this.articoliSvc.getAllArticle().then(res =>{
        this.articleArr = res
      })

    }
}
