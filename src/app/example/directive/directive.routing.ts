import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectiveComponent } from './directive.component';

const routes: Routes = [
  { path: 'directive', component: DirectiveComponent },
];

export const directiveRouting: ModuleWithProviders = RouterModule.forChild(routes);