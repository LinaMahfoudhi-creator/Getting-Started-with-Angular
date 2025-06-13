import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemCv} from '../item-cv/item-cv';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-liste-cv',
  imports: [
    ItemCv,
    NgForOf
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
