import { Component } from '@angular/core';
import { CellService } from '../../cell.service';
import { Iphone } from '../../models/iphone';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cell: Iphone[] = []

  constructor(private cellSvc:CellService){}

  ngOnInit(){
    this.cellSvc.getAllPhone().subscribe(el =>{
      this.cell = el.products
    })
  }
}
