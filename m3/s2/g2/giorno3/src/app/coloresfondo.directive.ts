import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColoresfondo]'
})
export class ColoresfondoDirective {

  constructor(private ref:ElementRef) { }
  @Input() colore: string[] = [
    'red',
    'yellow',
    'green',
    'purple',
    'pink'
  ]
  getRandomColor(){
    let coloreCasuale = Math.floor(Math.random() * this.colore.length)
    return this.colore[coloreCasuale]
  }
  ngOnInit(){
    this.ref.nativeElement.style.backgroundColor = this.getRandomColor()
  }
}

