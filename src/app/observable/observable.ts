import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css'
})
export class ObservableComponent implements OnInit {
  monObservable!: Observable<any>;
  mesImages = [
    'default-profile.png',
    'error-404.png',
    'rotating_card_profile.png',
  ];
  currentImage!:string;

  ngOnInit() {
    this.monObservable = new Observable(
      (observer) => {
        let i = this.mesImages.length - 1;
        setInterval(
          () => {
            observer.next(this.mesImages[i]);
            if (i === 0) {
              i = this.mesImages.length - 1;
            } else {
              i--;
            }
          }
        ,1500);
      }
    );
    this.monObservable.subscribe(
      (result) => {
        this.currentImage = result;
      }
    );
  }
}
