import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent }
];

export const indexRouting: ModuleWithProviders = RouterModule.forChild(routes);