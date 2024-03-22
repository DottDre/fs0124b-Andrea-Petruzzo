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
    this.router.params.subscribe((routeParameters:any) => {
      this.carsSvc.getCarById(routeParameters.id).then ( res => this.auto = res)
    })
  }
}

