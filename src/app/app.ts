import { Component } from '@angular/core';
import {Style} from './directive/style/style';
import {Class} from './directive/class/class';
import {Cv} from './cvTech/cv/cv';
import {Premier} from './premier';
import {Color} from './color/color';
import {Embauche} from './cvTech/embauche/embauche';

@Component({
  selector: 'app-root',
  imports: [
    Class,
    Cv,
    Color,
    Embauche,
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
