import { Component } from '@angular/core';
import { ServiceautoService } from '../../serviceauto.service';
import { ActivatedRoute } from '@angular/router';
import { Automobili } from '../../models/automobili';

@Component({
  selector: 'app-autodetail',
  templateUrl: './autodetail.component.html',
  styleUrl: './autodetail.component.scss'
})
export class AutodetailComponent {
  auto: Automobili | undefined;


  constructor(private router:ActivatedRoute, private carsSvc: ServiceautoService){}


  ngOnInit(){
    this.router.params.subscribe((route:any) => {
      this.carsSvc.getCarById(route.model)
      .then(res => {
        this.auto = res
      })
    })
  }
}

