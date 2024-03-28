import { Injectable } from '@angular/core';
import { iPhoto } from './photo';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos'

  photosArr:iPhoto[]=[]

  likeArr:iPhoto[]=[]
  photoSubject = new BehaviorSubject<iPhoto[]>([]);
  likeSubject = new BehaviorSubject<iPhoto[]>([])

  $photos = this.photoSubject.asObservable()
  $like = this.likeSubject.asObservable()
  constructor(private http:HttpClient){
    this.getAll().subscribe(data => {
      this.photoSubject.next(data)
      this.photosArr = data;
    })
  }

  getAll(){
    return this.http.get<iPhoto[]>(this.apiUrl)
  }
  getById(id:number){
    return this.photosArr.find(p => p.id == id)
  }

  delete(id:number){
    return this.http.delete<iPhoto>(this.apiUrl+'/'+id)
    .pipe(tap(()=>{

      this.photosArr = this.photosArr.filter(p => p.id != id)
      this.photoSubject.next(this.photosArr)

    }))
}
addToLike(id:number):void{
  const photoId = this.getById(id)
  if(photoId)
  if(!this.likeArr.some(i => i.id == id))
  this.likeArr.push(photoId)
  this.likeSubject.next(this.likeArr)
}
}
