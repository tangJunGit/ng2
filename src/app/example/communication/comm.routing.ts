import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicationComponent } from './comm.component';
import { Service1CommonComponent } from './service1-comm.component';
import { Service2CommonComponent } from './service2-comm.component';

const routes: Routes = [
  { path: 'communication', component: CommunicationComponent },
  { path: 'service1-communication', component: Service1CommonComponent },
];


export const commRouting: ModuleWithProviders = RouterModule.forChild(routes);