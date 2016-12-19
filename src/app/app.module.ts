import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';    // Title服务
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

//example
import { IndexModule } from './index/index.module';
import { FormDemoModule } from './example/forms/form.module';
import { HttpDemoModule } from './example/http/http.module';
import { RouteDemoModule } from './example/route/route.module';
import { AuthDemoModule } from './example/auth/auth.module';
import { DirectiveDemoModule } from './example/directive/directive.module';
import { PipeDemoModule } from './example/pipe/pipe.module';
import { CommunicationDemoModule } from './example/communication/comm.module';
import { DepInjectionDemoModule } from './example/dep-injection/dep-injection.module';
import { RxjsDemoModule } from './example/rxjs/rxjs.module';
import { AdvancedDemoModule } from './example/advanced/advanced.module';
// import { ReduxDemoModule } from './example/redux/redux.module';    
// import { LazyDemoModule } from './example/lazy/lazy.module';     

//component
import { StompDemoModule } from './component/stompjs/stomp.module';
import { TabDemoModule } from './component/tab/tab.module';
import { AccordionDemoModule } from './component/accordion/accordion.module';
import { CollapseDemoModule } from './component/collapse/collapse.module';
import { BaiduMapDemoModule } from './component/baiduMap/baiduMap.module';
import { ModalDemoModule } from './component/modal/modal.module';
import { PaginationModule } from './component/pagination/pagination.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        IndexModule,
        FormDemoModule, 
        HttpDemoModule,
        RouteDemoModule,
        AuthDemoModule,
        DirectiveDemoModule,
        PipeDemoModule, 
        CommunicationDemoModule,
        DepInjectionDemoModule,
        RxjsDemoModule,
        AdvancedDemoModule,
        // ReduxDemoModule,
        // LazyDemoModule,
        StompDemoModule,
        TabDemoModule,
        AccordionDemoModule,
        CollapseDemoModule,
        BaiduMapDemoModule,
        ModalDemoModule,
        PaginationModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        Title,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' } ,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
