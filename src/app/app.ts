import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {RouterSimulator} from './router-simulator/router-simulator';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    RouterSimulator,

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
