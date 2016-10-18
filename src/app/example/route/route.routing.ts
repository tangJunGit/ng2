import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteDemoComponent } from './route.component';
import { RouteTestComponent } from './test.component';
 
const routes: Routes = [
  { path: 'route', component: RouteDemoComponent },
  //parameter
  { path: 'route/:id', component: RouteTestComponent },
];

export const routeRouting: ModuleWithProviders = RouterModule.forChild(routes);