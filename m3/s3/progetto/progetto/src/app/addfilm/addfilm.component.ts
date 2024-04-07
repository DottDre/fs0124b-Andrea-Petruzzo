import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrl: './addfilm.component.scss'
})
export class AddfilmComponent {
  aggiungiFilm:Partial<Movies> = {}
  constructor(
    private addSvc:GlobalService,
    private router:Router
    ){}

    add(){
      this.addSvc.addMovie(this.aggiungiFilm)
      .subscribe(data =>{

        this.router.navigate(['/film-list'])
      })
  }

}
