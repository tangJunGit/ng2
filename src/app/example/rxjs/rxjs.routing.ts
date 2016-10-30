import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
 
const routes: Routes = [
  { path: 'rxjs', component: UserComponent }
];

export const rxjsRouting: ModuleWithProviders = RouterModule.forChild(routes);