import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-style',
  imports: [
    NgStyle,
    FormsModule
  ],
  templateUrl: './style.html',
  styleUrl: './style.css'
})
export class Style {
  @Input() color: string = 'white';
  @Input() bgColor: string = 'lightblue';
  size= '20px';

  changeSize(size:string) {
    this.size = size+"px";
  }
}
