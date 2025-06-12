import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Fils} from '../fils/fils';

@Component({
  selector: 'app-color',
  imports: [FormsModule, Fils],
  templateUrl: './color.html',
  styleUrl: './color.scss'
})
export class Color {
  protected color='red';
  processReq(message: string) {
    alert(message);
  }
}
