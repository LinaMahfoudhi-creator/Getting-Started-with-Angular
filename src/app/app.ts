import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {RouterSimulator} from './router-simulator/router-simulator';
import {ObservableComponent} from './observable/observable';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    RouterSimulator,
    ObservableComponent,

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
