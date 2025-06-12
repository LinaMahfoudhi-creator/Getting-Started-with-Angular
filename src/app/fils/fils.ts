import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.scss'
})
export class Fils implements OnInit {
  @Input() filsProperty: any;
  @Output() sendRequestToDad= new EventEmitter<any>();

  ngOnInit() {
    // Initialization logic can go here
    console.log('Fils component initialized with property:', this.filsProperty);
  }
  sendToDad() {
    this.sendRequestToDad.emit('Can I have some money?');
  }
}
