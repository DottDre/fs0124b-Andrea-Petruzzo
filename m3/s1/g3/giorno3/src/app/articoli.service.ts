import { Injectable } from '@angular/core';
import { article } from './models/nb1';
import { Jsoncontent } from './models/jsoncontent';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

    getAllArticle():Promise<article[]>{
        return fetch('../assets/article.json')
        .then(res => res.json())
        .then((res: article[]) => res);
      }


      getactive(){
        return this.getAllArticle()
        .then(res => res.filter(p => p.active))
      }



      getInactive(){
        return this.getAllArticle()
        .then(res => res.filter(p => !p.active))
      }

    }


