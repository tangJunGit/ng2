import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display.component';

const routes: Routes = [
  { path: 'display', component: DisplayComponent }
];

export const displayRouting: ModuleWithProviders = RouterModule.forChild(routes);