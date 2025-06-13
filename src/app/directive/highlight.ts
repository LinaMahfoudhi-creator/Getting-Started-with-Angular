import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  @HostBinding('style.background-Color') bgColor='red';
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'red';
  }

  constructor() { }

}
