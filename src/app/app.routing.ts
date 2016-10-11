import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: '', redirectTo: '/display',pathMatch: 'full'},
  { path: '**', component: DisplayComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });