import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  imports: [],
  templateUrl: './router-simulator.html',
  styleUrl: './router-simulator.css'
})
export class RouterSimulator {
  constructor(private router: Router) {}

  goToComponent(route:string) {
  const link = [route];
  this.router.navigate(link);
  }
}
