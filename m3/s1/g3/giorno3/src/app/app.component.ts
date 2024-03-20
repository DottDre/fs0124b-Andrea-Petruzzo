import { Component } from '@angular/core';
import { Nb1 } from './models/nb1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dpArr:Nb1[] = []

    ngOnInit(){
      fetch('../assets/db.json')
      .then(dati => dati.json())
      .then( (dati) => (this.dpArr = dati.posts) )
    }
}
