import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { routes, routerComponents } from './app.routing'

// 预加载需要提前申明服务
import { PreLoadService } from './example/router/pre-load.service';             
import { HttpService } from './example/http/http.service';         

// 守卫需要提前申明服务
import { AuthService } from './example/auth/auth.service';               
import { LoggedInGuardService } from './example/auth/loggedIn.guard';       

// 模块 NgModule
import { TabModule } from './component/tab';  
import { CollapseModule } from './component/collapse';  
import { AccordionModule } from './component/accordion';  


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    TabModule,
    CollapseModule,
    AccordionModule,
  ],
  declarations: [
    AppComponent,
    routerComponents,
  ],
  providers: [
    PreLoadService,
    HttpService,
    AuthService,
    LoggedInGuardService,
    {provide: APP_BASE_HREF, useValue: '/ng2'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
