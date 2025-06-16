import {Routes} from '@angular/router';
import {Cv} from './cvTech/cv/cv';
import {Color} from './color/color';
import {Detail} from './cvTech/detail/detail';
import {DeleteCv} from './cvTech/delete-cv/delete-cv';
import {AddCv} from './cvTech/add-cv/add-cv';
import {Error} from './error/error';


export const APP_ROUTING: Routes = [
  {path: 'cv',component: Cv, children: [
      {path: ':id', component: Detail},
      {path: 'delete/:id', component: DeleteCv},
      {path: 'add', component: AddCv},
    ]},
  {path: '', component: Cv},
  {path: 'color/:default/:secondParam', component: Color},
  {path: '**', component: Error}
];
