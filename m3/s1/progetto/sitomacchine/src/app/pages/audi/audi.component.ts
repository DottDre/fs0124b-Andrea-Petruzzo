import { Component } from '@angular/core';
import { Automobili } from '../../models/automobili';
import { ServiceautoService } from '../../serviceauto.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  audiArr: Automobili[] = []
  isAvailable: boolean|null = null

  constructor(private autoSvc:ServiceautoService){}

  ngOnInit(){
    this.autoSvc.getBrandAuto('Audi').then(auto =>{
      this.audiArr= auto
    })
  }
}
