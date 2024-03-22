import { Component } from '@angular/core';
import { Automobili } from '../../models/automobili';
import { ServiceautoService } from '../../serviceauto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  autoArr: Automobili[] = []
  randomAutoArr:  Automobili[] = []

  constructor(private autoSvc:ServiceautoService){}

  ngOnInit(){
    this.autoSvc.getAllAuto()
    .then (auto => {
      this.autoArr = auto
    })
    this.autoSvc.getRandomposts(2, this.randomAutoArr)
    .then(post =>{
      this.randomAutoArr = post
    })
  }
  }

