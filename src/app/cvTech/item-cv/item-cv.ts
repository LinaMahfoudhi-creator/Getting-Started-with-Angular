import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {TitleCasePipe} from '@angular/common';
import {DefaultImagePipe} from '../default-image-pipe';

@Component({
  selector: 'app-item-cv',
  imports: [
    TitleCasePipe,
    DefaultImagePipe
  ],
  templateUrl: './item-cv.html',
  styleUrl: './item-cv.css'
})
export class ItemCv {
  @Input() personne: Personne= new Personne(0, '', '', 0, '', 0, '');
  @Output() selectedPersonne= new EventEmitter();
  selectPersonne(){
    this.selectedPersonne.emit(this.personne);
  }
}
