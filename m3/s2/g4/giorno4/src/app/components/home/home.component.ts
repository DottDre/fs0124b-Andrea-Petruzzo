import { Component } from '@angular/core';
import { iPhoto } from '../../photo';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  photosArr:iPhoto[]=[]
  likeArr:iPhoto[]=[]
  constructor(private photoSvc: PhotosService){}

  ngOnInit(){
    this.photoSvc.$photos.subscribe(p => {
      this.photosArr = p
    })
    this.photoSvc.$like.subscribe(like => {
      this.likeArr = like;
    });
  }
  cancella(id:number){
    this.photoSvc.delete(id).subscribe()
  }
  like(id:number):void{
    this.photoSvc.addToLike(id)
  }
}
