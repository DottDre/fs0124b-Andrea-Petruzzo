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
  preferiti: Iphone[] = []
  constructor(private cellSvc:CellService){}

  ngOnInit(){
    this.cellSvc.getAllPhone().subscribe(el =>{
      this.cell = el.products
    })
  }
  addPref(cell:Iphone):void{
    if(!this.preferiti.some(item => item.id === cell.id)){
      this.preferiti.push(cell)
    }
    console.log(this.preferiti)
  }
}
