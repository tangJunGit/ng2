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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    routerComponents,
  ],
  providers: [
    PreLoadService,
    HttpService,
    {provide: APP_BASE_HREF, useValue: '/ng2'},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
