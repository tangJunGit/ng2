import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepInjectionComponent } from './dep-injection.component';

const routes: Routes = [
  { path: 'dep-injection', component: DepInjectionComponent },
];

export const depInjectionRouting: ModuleWithProviders = RouterModule.forChild(routes);

