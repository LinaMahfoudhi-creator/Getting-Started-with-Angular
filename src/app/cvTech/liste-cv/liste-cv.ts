import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemCv} from '../item-cv/item-cv';

@Component({
  selector: 'app-liste-cv',
  imports: [
    ItemCv
  ],
  templateUrl: './liste-cv.html',
  styleUrl: './liste-cv.css'
})
export class ListeCv {
  @Input() personnes: any[] = [];
  @Output() selectedPersonne = new EventEmitter<any>();
  selectPersonne(selectedPersonne: any) {
    this.selectedPersonne.emit(selectedPersonne);
  }
}
