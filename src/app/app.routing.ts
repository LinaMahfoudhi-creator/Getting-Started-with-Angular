import {Routes} from '@angular/router';
import {Cv} from './cvTech/cv/cv';
import {Color} from './color/color';


export const APP_ROUTING: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  {path: 'cv', component: Cv},
  {path: 'color', component: Color}
];
