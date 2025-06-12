import { Component, Input } from '@angular/core';
import {Personne} from '../../Model/Personne';


@Component({
  selector: 'app-detail-cv',
  imports: [],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css'
})
export class DetailCv {
  @Input() personne: Personne= new Personne(0, '', '', 0, '', 0, '');

}
