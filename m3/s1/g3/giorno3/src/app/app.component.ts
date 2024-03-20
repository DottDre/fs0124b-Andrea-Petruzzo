import { Component } from '@angular/core';
import { Nb1 } from './models/nb1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dpArr:Nb1[] = []
  randomPost:Nb1[]=[]
  ran: number = 0
  ngOnInit(){
    fetch('../assets/db.json')
    .then(dati => dati.json())
    .then( (dati) => (this.dpArr = dati.posts) )
  }
  Random(){
    let random = Math.floor(Math.random() * this.dpArr.length)
    this.ran = random
    return random
  }
  get4(){
    for (let i = 0; i < 4; i++) {
      this.randomPost.push(this.dpArr[this.Random()])

    }
    }
}
