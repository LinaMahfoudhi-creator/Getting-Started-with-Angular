import {Component, OnInit} from '@angular/core';
import {DefaultImagePipe} from "../default-image-pipe";
import {TitleCasePipe} from "@angular/common";
import {EmbaucheService} from '../embauche';
import {Personne} from '../../Model/Personne';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-embauche',
    imports: [
        DefaultImagePipe,
        TitleCasePipe,
        CommonModule
    ],
  templateUrl: './embauche.html',
  styleUrl: './embauche.css'
})
export class Embauche implements OnInit {
  protected personnes!: Personne[];
  constructor(private embaucheService: EmbaucheService) {}
  ngOnInit() {
    this.personnes=this.embaucheService.getEmbauchees();
  }

}
