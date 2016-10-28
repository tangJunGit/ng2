import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReduxComponent } from './redux.component';

const routes: Routes = [
  { path: 'redux', component: ReduxComponent },
];

export const reduxRouting: ModuleWithProviders = RouterModule.forChild(routes);