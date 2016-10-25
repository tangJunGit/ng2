import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatThreadComponent } from './thread.component';

const routes: Routes = [
  { path: 'rxjs/chat', component: ChatThreadComponent },
];


export const chatRouting: ModuleWithProviders= RouterModule.forChild(routes);