import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';
import {Highlight} from '../highlight';
import {Rainbow} from '../rainbow';

@Component({
  selector: 'app-class',
  imports: [
    NgClass,
    Highlight,
    Rainbow,
    NgIf,
    CommonModule
  ],
  templateUrl: './class.html',
  styleUrl: './class.css'
})
export class Class {
  teams=[
    'est',
    'milan',
    'barca',
    'om'
  ];
  est=false;
  milan=true;
  barca=false;
  show: boolean = false;
  changeTeam(){
    this.est=!this.est;
    this.milan=!this.milan;
    this.barca=!this.barca;
  }
  changeVisibility() {
    this.show = !this.show;
    console.log(this.show);
  }
}
