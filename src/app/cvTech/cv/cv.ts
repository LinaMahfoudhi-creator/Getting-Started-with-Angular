import {Component, OnInit} from '@angular/core';
import {ListeCv} from '../liste-cv/liste-cv';
import {DetailCv} from '../detail-cv/detail-cv';
import {Personne} from '../../Model/Personne';
import {CommonModule} from '@angular/common';
import { CvService } from '../cv'
@Component({
  selector: 'app-cv',
  imports: [
    ListeCv,
    DetailCv,
    CommonModule
  ],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv implements OnInit {
  personnes: Personne[]= [];
  selectedPersonne!: Personne;
  constructor(private cvService: CvService) {
  }
  ngOnInit(): void {
    this.personnes=this.cvService.getPersonnes();
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }

}
