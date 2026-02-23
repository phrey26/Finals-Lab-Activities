import { Routes } from '@angular/router';
import { Register } from './register/register';
import { AngularMatDemo } from './angular-mat-demo/angular-mat-demo';


export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'angular-mat-demo', component: AngularMatDemo },
  { path: '**', redirectTo: 'register' }
];
