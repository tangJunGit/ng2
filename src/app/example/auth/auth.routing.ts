import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
];


export const authRouting: ModuleWithProviders = RouterModule.forChild(routes);