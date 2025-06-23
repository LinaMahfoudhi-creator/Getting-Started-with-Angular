import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {RouterSimulator} from './router-simulator/router-simulator';
import {ObservableComponent} from './observable/observable';
import {HttpClientComponent} from './http-client/http-client';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    RouterSimulator,
    ObservableComponent,
    HttpClientComponent,
    HttpClientModule,

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
