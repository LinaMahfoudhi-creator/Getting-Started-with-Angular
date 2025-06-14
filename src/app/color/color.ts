import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Fils} from '../fils/fils';
import { Premier } from '../premier';


@Component({
  selector: 'app-color',
  imports: [FormsModule, Fils],
  templateUrl: './color.html',
  styleUrl: './color.css',
  providers: [Premier]
})
export class Color {
  protected color='red';
  constructor(private premier: Premier) {}
  processReq(message: string) {
    alert(message);
  }
  loggerMesData(){
    this.premier.logger('data from color');
  }
}
