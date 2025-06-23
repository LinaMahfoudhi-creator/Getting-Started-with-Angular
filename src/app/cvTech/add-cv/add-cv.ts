import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {CvService} from '../cv';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-cv',
  imports: [
    FormsModule
  ],
  templateUrl: './add-cv.html',
  styleUrl: './add-cv.css'
})
export class AddCv {
  constructor(private cvService: CvService,
              private router: Router) { }
    addPersonne(formulaire:NgForm) {
    console.log('Formulaire:', formulaire.value);
    this.cvService.addPersonne(formulaire.value).subscribe(
      (response) => {
        const link=['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.log('Error adding personne:', error);
      }
    );
    }
}
