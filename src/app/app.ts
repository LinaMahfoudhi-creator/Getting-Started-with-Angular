import { Component } from '@angular/core';
import {Style} from './directive/style/style';
import {Class} from './directive/class/class';
import {Cv} from './cvTech/cv/cv';

@Component({
  selector: 'app-root',
  imports: [
    Class,
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
