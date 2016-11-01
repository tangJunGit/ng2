import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedDemoComponent }   from './advanced.component';

const routes: Routes = [
  { path: 'advanced', component: AdvancedDemoComponent },
];

export const componentRouting: ModuleWithProviders = RouterModule.forChild(routes);