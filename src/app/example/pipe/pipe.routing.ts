import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipeComponent } from './pipe.component';

const routes: Routes = [
  { path: 'pipe', component: PipeComponent },
];

export const pipeRouting: ModuleWithProviders = RouterModule.forChild(routes);