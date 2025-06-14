import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [];
  }
  getEmbauchees(): Personne[] {
    return this.personnes;
  }
  embaucher(personne:Personne) {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      this.personnes.push(personne);
    } else {
      alert('Cette personne est déjà embauchée.');
    }
  }
  debaucher(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if (index !== -1) {
      this.personnes.splice(index, 1);
    } else {
      alert('Cette personne n\'est pas embauchée.');
    }
  }
}
