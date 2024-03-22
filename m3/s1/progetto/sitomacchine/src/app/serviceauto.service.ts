import { Observable } from 'rxjs';
import { Automobili } from './models/automobili';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceautoService {

  getAllAuto():Promise<Automobili[]>{
      return fetch('../assets/db.json')
      .then (res => res.json())
      .then ((res:Automobili[]) => res)
    }
    getAvailableAuto():Promise<Automobili[]>{
      return this.getAllAuto()
      .then(post => post.filter(p => p.available))
    }
    getUnavailableAuto():Promise<Automobili[]>{
      return this.getAllAuto()
      .then(post => post.filter(p => !p.available))
    }

    getBrandAuto(brand:string):Promise<Automobili[]>{
      return this.getAllAuto()
      .then(auto => auto.filter(a => a.brand === brand))
    }


    getRandomposts(n: number, array:Automobili[]):Promise<Automobili[]> {
      array = [];
      return this.getAllAuto()
      .then(res => {
        for (let i = 0; i < n; i++) {
        let rand = Math.floor(Math.random() * res.length);
        array.push(res[rand]);
      }
      return array;
    })

}}
