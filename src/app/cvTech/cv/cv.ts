import {Component, OnInit} from '@angular/core';
import {ListeCv} from '../liste-cv/liste-cv';
import {DetailCv} from '../detail-cv/detail-cv';
import {Personne} from '../../Model/Personne';
import {CommonModule} from '@angular/common';

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
  ngOnInit(): void {
    this.personnes=[
      new Personne(1, 'Jean', 'Dupont', 40,"rotating_card_profile2.png",1, 'Développeur Full Stack')
      ,new Personne(2, 'Marie', 'Curie', 35,"rotating_card_profile.png",2, 'Chercheuse en Physique'),
      new Personne(3, 'Albert', 'Einstein', 45,'',3, 'Physicien Théoricien'),
    ]
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }

}
