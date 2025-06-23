import {Component, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {DefaultImagePipe} from '../default-image-pipe';
import {EmbaucheService} from '../embauche';
import {CommonModule} from '@angular/common';
import { CvService } from '../cv'
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-detail',
  imports: [
    CommonModule,
    DefaultImagePipe
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail implements OnInit {
  protected personne!: Personne | undefined;
  constructor(private cvService: CvService,
              private activatedrouter: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedrouter.params.subscribe(params => {
      const id = Number(params['id']);
      console.log(id);
      this.cvService.getPersonneByid(id).subscribe(
        (personne) => {
          this.personne = personne;
        },
        (error) => {
          console.error('Error fetching personne:', error);
          this.personne = undefined; // Handle error case
        }
      );
    })
  }
  deletePersonne() {
    // @ts-ignore
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response)=>{
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.error('Error deleting personne:', error);
      }
    );
  }
}
