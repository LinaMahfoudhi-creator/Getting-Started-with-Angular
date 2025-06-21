import {Routes} from '@angular/router';
import {Cv} from './cvTech/cv/cv';
import {Color} from './color/color';
import {Detail} from './cvTech/detail/detail';
import {DeleteCv} from './cvTech/delete-cv/delete-cv';
import {AddCv} from './cvTech/add-cv/add-cv';
import {Error} from './error/error';
import {Login} from './login/login';


export const APP_ROUTING: Routes = [
  {path: 'cv', children: [
      {path: '', component: Cv},
      {path: 'add', component: AddCv},
      {path: ':id', component: Detail},
      {path: 'delete/:id', component: DeleteCv},
    ]},
  {path: '', component: Cv},
  {path: 'login', component: Login},
  {path: 'color/:default/:secondParam', component: Color},
  {path: '**', component: Error}
];
