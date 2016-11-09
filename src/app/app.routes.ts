import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index',pathMatch: 'full'},
  // { path: '**', component: IndexComponent },    // 懒加载不需要
  // 懒加载
  {
  	path: "lazy", 
  	loadChildren: "./example/lazy/lazy.module#LazyDemoModule" 
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);