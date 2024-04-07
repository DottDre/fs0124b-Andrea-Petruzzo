import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Movies } from './models/movies';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  filmUrl = environment.filmUrl;

  userUrl = environment.usersUrl

  filmArr: Movies[]=[]

  userArr: Users[]=[]

  filmSubject = new BehaviorSubject<Movies[]>([]);

  userSubject = new BehaviorSubject<Users[]>([]);

  $film = this.filmSubject.asObservable()

  $users= this.userSubject.asObservable()

  constructor(private http:HttpClient){
    this.getAllMovies().subscribe(data => {
      this.filmSubject.next(data)
      this.filmArr = data
    })
    this.getAllUsers().subscribe(data => {
      this.userSubject.next(data)
      this.userArr = data
    })
  }

  getAllMovies(){
    return this.http.get<Movies[]>(this.filmUrl)
  }

  deleteMovie(id:number){
    return this.http.delete<Movies>(this.filmUrl+ '/' +id)
    .pipe(tap(()=>{
      this.filmArr = this.filmArr.filter(p => p.id != id)
      this.filmSubject.next(this.filmArr)
    }))
  }
  addMovie(newMovie: Partial<Movies>){
    return this.http.post<Movies>(this.filmUrl,newMovie)
    .pipe(tap(() => {
      this.getAllMovies().subscribe(movie => this.filmSubject.next(movie))
    }))
  }
  editMovie(newMovie: Partial<Movies>){
    return this.http.put<Movies>(this.filmUrl,newMovie)
    .pipe(tap(() => {
      this.getAllMovies().subscribe(movie => this.filmSubject.next(movie))
    }))
  }
  getAllUsers(){
    return this.http.get<Users[]>(this.userUrl)
  }
}
