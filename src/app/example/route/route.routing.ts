import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteDemoComponent } from './route.component';
import { RouteTestComponent } from './test.component';
import { WelcomeComponent } from './welcome.component';
 
const routes: Routes = [
  { path: 'route', component: RouteDemoComponent, children:   //子路由
    [    
      { path: '', component: WelcomeComponent},
      { path: ':id/:id2', component: RouteTestComponent},
    ]
  },
];

export const routeRouting: ModuleWithProviders = RouterModule.forChild(routes);