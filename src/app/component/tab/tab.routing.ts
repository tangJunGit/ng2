import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabDemoComponent } from './tab-demo.component';

const routes: Routes = [
  { path: 'tab', component: TabDemoComponent },
];

export const tabRouting: ModuleWithProviders = RouterModule.forChild(routes);

