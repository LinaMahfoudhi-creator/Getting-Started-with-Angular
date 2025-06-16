import { Component, Input } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {TitleCasePipe} from '@angular/common';
import {DefaultImagePipe} from '../default-image-pipe';
import {EmbaucheService} from '../embauche';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  imports: [
    TitleCasePipe,
    DefaultImagePipe,
    CommonModule
  ],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css'
})
export class DetailCv {
  @Input() personne!: Personne;
  constructor(private embaucheService: EmbaucheService,
              private router: Router,) {}
  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
  moreInfo(){
    const link= ['cv', this.personne.id];
    this.router.navigate(link);
  }
}
