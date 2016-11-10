import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index',pathMatch: 'full'},
  // 懒加载
  {
  	path: "lazy", 
  	loadChildren: "./example/lazy/lazy.module#LazyDemoModule" 
  },
  { path: '**', component: IndexComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);