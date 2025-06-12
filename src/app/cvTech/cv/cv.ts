import {Component, OnInit} from '@angular/core';
import {ListeCv} from '../liste-cv/liste-cv';
import {DetailCv} from '../detail-cv/detail-cv';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-cv',
  imports: [
    ListeCv,
    DetailCv
  ],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv implements OnInit {
  personnes: Personne[]= [];
  selectedPersonne: Personne= new Personne(0, '', '', 0, '', 0, '');
  ngOnInit(): void {
    this.personnes=[
      new Personne(1, 'Jean', 'Dupont', 40,"rotating_card_profile2.png",1, 'Développeur Full Stack')
      ,new Personne(2, 'Marie', 'Curie', 35,"rotating_card_profile.png",2, 'Chercheuse en Physique')
    ]
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }

}
