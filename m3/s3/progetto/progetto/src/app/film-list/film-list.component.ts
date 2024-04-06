import { Component } from '@angular/core';
import { Movies } from '../models/movies';
import { MovieService} from '../movie.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent {

  film: Movies[]=[];

  constructor(private filmSvc: MovieService) { }

  ngOnInit(): void {
    this.filmSvc.$film.subscribe(film => {
      this.film = film;
    });
  }

  deleteMovie(id:number){
    this.filmSvc.deleteMovie(id).subscribe()
  }

}
