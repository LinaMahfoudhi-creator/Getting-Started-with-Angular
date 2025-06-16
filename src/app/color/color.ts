import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Fils} from '../fils/fils';
import { Premier } from '../premier';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-color',
  imports: [FormsModule, Fils],
  templateUrl: './color.html',
  styleUrl: './color.css',
  providers: [Premier]
})
export class Color implements OnInit {
  protected color='red';
  constructor(private premier: Premier,
              private router: Router,
              private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.color = params['default'];
      console.log(params);
    })
  }
  processReq(message: string) {
    alert(message);
  }
  loggerMesData(){
    this.premier.logger('data from color');
  }
  goToCv(){
    const link=['cv'];
    this.router.navigate(link);
  }
}
