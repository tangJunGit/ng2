import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index',pathMatch: 'full'},
  { path: '**', component: IndexComponent },
  // 懒加载
  // {
  // 	path: "loadchildren", 
  // 	loadChildren: "es6-promise?,[name]!./example/loadchildren/loadchildren.module#LoadchildrenDemoModule" 
  // }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);