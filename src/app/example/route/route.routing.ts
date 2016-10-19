import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteDemoComponent } from './route.component';
import { RouteTestComponent } from './test.component';
 
const routes: Routes = [
  { path: 'route', children:   //子路由
    [    
      { path: '', component: RouteDemoComponent},
      { path: ':id', component: RouteTestComponent},
    ]
  },
];

export const routeRouting: ModuleWithProviders = RouterModule.forChild(routes);