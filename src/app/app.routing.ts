import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index',pathMatch: 'full'},
  { path: '**', component: IndexComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);