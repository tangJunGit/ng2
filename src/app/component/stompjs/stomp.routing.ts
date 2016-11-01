import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StompComponent } from './stomp-demo.component';

const routes: Routes = [
  { path: 'stomp', component: StompComponent },
];

export const stompRouting: ModuleWithProviders = RouterModule.forChild(routes);

