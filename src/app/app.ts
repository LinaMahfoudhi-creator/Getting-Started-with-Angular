import { Component } from '@angular/core';
import {Color} from './color/color';

@Component({
  selector: 'app-root',
  imports: [
    Color,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected colour = 'yellow';
  show = false;
  protected changeStatus(){
    this.show = !this.show;
  }
}
