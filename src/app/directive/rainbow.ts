import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class Rainbow {
  tableau=[
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'purple',
    'pink',
    'brown',
    'black',
    'white',
  ]
  @HostBinding('style.border-color') bc='black';
  @HostBinding('style.color') color='black';
  @HostListener('keydown') changeColor() {
    const randomIndex = Math.floor(Math.random() * this.tableau.length-1);
    this.bc = this.tableau[randomIndex];
    this.color = this.tableau[randomIndex];
  }
  constructor() { }

}
