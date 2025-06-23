import {Component, OnInit} from '@angular/core';
import {ListeCv} from '../liste-cv/liste-cv';
import {DetailCv} from '../detail-cv/detail-cv';
import {Personne} from '../../Model/Personne';
import {CommonModule} from '@angular/common';
import { CvService } from '../cv'
import {RouterOutlet} from '@angular/router';
import {Embauche} from '../embauche/embauche';
import {HttpClientModule} from '@angular/common/http';;
@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    ListeCv,
    DetailCv,
    CommonModule,
    RouterOutlet,
    Embauche,
    HttpClientModule
  ],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv implements OnInit {
  personnes!: Personne[];
  selectedPersonne!: Personne;
  constructor(private cvService: CvService) {
  }
  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes
      },
      (error) => {
        this.personnes= this.cvService.getFakePersonnes();
      }
    );
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }

}
