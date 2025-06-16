import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes=[
      new Personne(1, 'Jean', 'Dupont', 40,"rotating_card_profile2.png",1, 'Développeur Full Stack')
      ,new Personne(2, 'Marie', 'Curie', 35,"rotating_card_profile.png",2, 'Chercheuse en Physique'),
      new Personne(3, 'Albert', 'Einstein', 45,'',3, 'Physicien Théoricien'),
    ]
  }
  getPersonnes():Personne[]{
    return this.personnes;
  }
  getPersonneByid(id: number): Personne | undefined {
    const personne = this.personnes.find(
      p => {
        return p.id == id
      });
    return personne;
  }
}
