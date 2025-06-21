import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  login(loginFormulaire:NgForm) {
    console.log(loginFormulaire);
  }
}
