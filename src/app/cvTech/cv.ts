import {Injectable, OnInit} from '@angular/core';
import {Personne} from '../Model/Personne';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService{
  private personnes!: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'Jean', 'Dupont', 40, "rotating_card_profile2.png", 1, 'Développeur Full Stack')
      , new Personne(2, 'Marie', 'Curie', 35, "rotating_card_profile.png", 2, 'Chercheuse en Physique'),
      new Personne(3, 'Albert', 'Einstein', 45, '', 3, 'Physicien Théoricien'),
    ];
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>('http://localhost:3000/personnes');
  }
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneByid(id: number): Observable<Personne> {
    return this.http.get<Personne>(`http://localhost:3000/personnes/${id}`)
  }
  addPersonne(personne: Personne): Observable<any> {
    return this.http.post('http://localhost:3000/personnes', personne);
  }
  deletePersonne(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/personnes/${id}`);
  }

}
