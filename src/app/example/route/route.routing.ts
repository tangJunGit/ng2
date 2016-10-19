import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteDemoComponent } from './route.component';
import { RouteTestComponent } from './test.component';
import { WelcomeComponent } from './welcome.component';
import { PreLoadService } from './pre-load.service';
 
const routes: Routes = [
  { path: 'route', component: RouteDemoComponent,
  children:   //子路由
    [
      { path: '', component: WelcomeComponent,
        resolve: {
           date: PreLoadService      //预加载 
        }
      },
      { path: ':id/:id2', component: RouteTestComponent},
    ],
  },
];

export const routeRouting: ModuleWithProviders = RouterModule.forChild(routes);