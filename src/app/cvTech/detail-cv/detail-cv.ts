import { Component, Input } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {TitleCasePipe} from '@angular/common';
import {DefaultImagePipe} from '../default-image-pipe';


@Component({
  selector: 'app-detail-cv',
  imports: [
    TitleCasePipe,
    DefaultImagePipe
  ],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css'
})
export class DetailCv {
  @Input() personne!: Personne;

}
