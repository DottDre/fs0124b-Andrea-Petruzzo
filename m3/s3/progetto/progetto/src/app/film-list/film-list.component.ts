import { Component } from '@angular/core';
import { Movies } from '../models/movies';
import { GlobalService} from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent {

  film: Movies[]=[];
  modificaFilm:Partial<Movies> = {}
  constructor(private filmSvc: GlobalService, private router:Router) { }

  ngOnInit(): void {
    this.filmSvc.$film.subscribe(film => {
      this.film = film;
    });
  }

  deleteMovie(id:number){
    this.filmSvc.deleteMovie(id).subscribe()
  }

  edit(){
    this.filmSvc.editMovie(this.modificaFilm)
    .subscribe(data =>{

      this.router.navigate(['/film-list'])
    })
  }

}
