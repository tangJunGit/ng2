import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentDemoComponent }   from './demo.component';

const routes: Routes = [
  { path: 'component', component: ComponentDemoComponent },
];

export const componentRouting: ModuleWithProviders = RouterModule.forChild(routes);