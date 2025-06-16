import {Component, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {DefaultImagePipe} from '../default-image-pipe';
import {EmbaucheService} from '../embauche';
import {CommonModule} from '@angular/common';
import { CvService } from '../cv'
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  imports: [
    CommonModule
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail implements OnInit {
  protected personne!: Personne | undefined;
  constructor(private cvService: CvService,
              private activatedrouter: ActivatedRoute) {}

  ngOnInit() {
    this.activatedrouter.params.subscribe(params => {
      const id = Number(params['id']);
      console.log(id);
      this.personne = this.cvService.getPersonneByid(id);
    })
  }
}
