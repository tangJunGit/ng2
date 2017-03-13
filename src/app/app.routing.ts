import { Routes } from '@angular/router';

import { IndexComponent } from './example/index/index.component';
import { FormComponent } from './example/form/form.component';
import { FormBuilderComponent } from './example/form-builder/form-builder.component';
import { ValidationComponent } from './example/validation/validation.component';
import { HttpComponent } from './example/http/http.component';
import { YoutubeSearchComponent, SearchInputComponent } from './example/http/http-search.component';
import { RouterPreLoadComponent, RouterInfoComponent } from './example/router/router-pre-load.component';
import { PreLoadService } from './example/router/pre-load.service';              // 预加载

// 配置路由
export const routes: Routes = [
  { path: '', redirectTo: 'index',pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'form', component: FormComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'http', component: HttpComponent },
  { path: 'http-search', component: YoutubeSearchComponent },
  { 
    path: 'router', 
    component: RouterPreLoadComponent, 
    resolve: {
        data: PreLoadService         // 预加载 
    }
  },
  { path: 'router-info/:id/:title', component: RouterInfoComponent },
  // { path: 'lazy', loadChildren: './example/lazy/lazy.module#FormModule' },
  { path: '**', component: IndexComponent }
];

// 导出组件
export const routerComponents = [
  IndexComponent,
  FormComponent,
  FormBuilderComponent,
  ValidationComponent,
  HttpComponent,
  YoutubeSearchComponent,
  SearchInputComponent,
  RouterPreLoadComponent,
  RouterInfoComponent,
];