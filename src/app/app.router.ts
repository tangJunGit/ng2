import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { IndexComponent } from './example/index/index.component';

// 配置路由
export const routes: Routes = [
  { path: '', redirectTo: 'index',pathMatch: 'full'},
  { path: '**', component: IndexComponent }
];

// 导出组件
export const routeComponents = [
  IndexComponent,
];