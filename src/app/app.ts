import { Component } from '@angular/core';
import {Color} from './color/color';
import {Cv} from './cvTech/cv/cv';

@Component({
  selector: 'app-root',
  imports: [
    Color,
    Cv,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected colour = 'yellow';
  show = false;
  protected changeStatus(){
    this.show = !this.show;
  }
}
