import { Component } from '@angular/core';
import { Automobili } from '../../models/automobili';
import { ServiceautoService } from '../../serviceauto.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  fiatArr: Automobili[] = []

  constructor(private autoSvc:ServiceautoService){}

  ngOnInit(){
    this.autoSvc.getBrandAuto('Fiat').then(auto =>{
      this.fiatArr= auto
    })
  }
}

