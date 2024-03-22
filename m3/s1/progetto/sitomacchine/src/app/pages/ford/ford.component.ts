import { Component } from '@angular/core';
import { Automobili } from '../../models/automobili';
import { ServiceautoService } from '../../serviceauto.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  fordArr: Automobili[] = []

  constructor(private autoSvc:ServiceautoService){}

  ngOnInit(){
    this.autoSvc.getBrandAuto('Ford').then(auto =>{
      this.fordArr= auto
    })
  }
}

