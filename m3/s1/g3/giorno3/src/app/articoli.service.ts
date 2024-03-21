import { Injectable } from '@angular/core';
import { article } from './models/nb1';


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
      getRandomposts({ n, b }: { n: number; b: article[]; }): Promise<void>{
        return this.getAllArticle()
        .then(res =>{

          for(let i = 0; i < n; i++){

            let rand = Math.floor(Math.random() * res.length)

            b.push( res[rand] );

          }
        })

      }

    }


