import { Component } from '@angular/core';
import { Movies } from '../models/movies';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent {

  film: Movies[]=[];

  constructor(private filmSvc: ServiceService) { }

  ngOnInit(): void {
    this.filmSvc.$users.subscribe(film => {
      this.film = film;
    });
  }

  deleteMovie(id:number){
    this.filmSvc.delete(id).subscribe()
  }

}
