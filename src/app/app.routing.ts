import { Routes } from '@angular/router';

import { IndexComponent } from './example/index/index.component';

// 表单
import { FormComponent } from './example/form/form.component';
import { FormBuilderComponent } from './example/form-builder/form-builder.component';
import { ValidationComponent } from './example/validation/validation.component';

// http
import { HttpComponent } from './example/http/http.component';
import { YoutubeSearchComponent, SearchInputComponent } from './example/http/http-search.component';

// 预加载
import { RouterPreLoadComponent, RouterInfoComponent } from './example/router/router-pre-load.component';
import { PreLoadService } from './example/router/pre-load.service';              

 // 守卫
import { AuthComponent, ProtectedComponent } from './example/auth/auth.component';
import { LoggedInGuardService } from './example/auth/loggedIn.guard';      

// 指令
import { DirectiveComponent } from './example/directive/directive.component';     
import { HighlightDirective } from './example/directive/highlight.directive';               

// 通道
import { PipeComponent } from './example/pipe/pipe.component';      
import { ExponentialStrengthPipe } from './example/pipe/exponential.pipe';      

// 通信
import { CommComponent } from './example/comm/comm.component';    
import { CountdownTimerComponent } from './example/comm/timer.Component';    
import { ServiceCommComponent } from './example/comm/service-comm.component';    

// 依赖注入
import { DepInjectionComponent } from './example/dep-injection/dep-injection.component';

// tab
import { TabDemoComponent } from './component/tab/tab-demo.component';

// 折叠
import { CollapseDemoComponent } from './component/collapse/collapse-demo.component';

// 手风琴
import { AccordionDemoComponent } from './component/accordion/accordion-demo.component';

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
  { path: 'auth', component: AuthComponent },
  { 
    path: 'protected', 
    component: ProtectedComponent,
    canActivate: [LoggedInGuardService]          // 守卫
  },
  { path: 'lazy', loadChildren: './example/lazy/lazy.module#LazyModule' },    // 懒加载
  { path: 'directive', component: DirectiveComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'comm', component: CommComponent },
  { path: 'service-comm', component: ServiceCommComponent },
  { path: 'dep-injection', component: DepInjectionComponent },
  { path: 'tab', component: TabDemoComponent },
  { path: 'collapse', component: CollapseDemoComponent },
  { path: 'accordion', component: AccordionDemoComponent },
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
  AuthComponent,
  ProtectedComponent,
  DirectiveComponent,
  HighlightDirective, 
  PipeComponent,
  ExponentialStrengthPipe,
  CommComponent,
  CountdownTimerComponent,
  ServiceCommComponent,
  DepInjectionComponent,
  TabDemoComponent,
  CollapseDemoComponent,
  AccordionDemoComponent,
];