import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Movies } from './models/movies';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  filmUrl = environment.filmUrl;

  filmArr: Movies[]=[]

  filmSubject = new BehaviorSubject<Movies[]>([]);

  $users = this.filmSubject.asObservable()

  constructor(private http:HttpClient){
    this.getAll().subscribe(data => {
      this.filmSubject.next(data)
      this.filmArr = data;
    })
  }

  getAll(){
    return this.http.get<Movies[]>(this.filmUrl)
  }

  delete(id:number){
    return this.http.delete<Movies>(this.filmUrl+ '/' +id)
    .pipe(tap(()=>{
      this.filmArr = this.filmArr.filter(p => p.id != id)
      this.filmSubject.next(this.filmArr)
    }))
  }
}
