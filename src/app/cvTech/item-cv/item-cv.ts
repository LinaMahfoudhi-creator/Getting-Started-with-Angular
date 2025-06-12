import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-item-cv',
  imports: [],
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
