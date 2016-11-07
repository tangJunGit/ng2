import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { FormDemoModule } from './example/forms/form.module';
import { DirectiveDemoModule } from './example/directive/directive.module';
import { PipeDemoModule } from './example/pipe/pipe.module';
import { CommunicationDemoModule } from './example/communication/comm.module';
import { DepInjectionDemoModule } from './example/dep-injection/dep-injection.module';
import { RxjsDemoModule } from './example/rxjs/rxjs.module';
// import { ReduxDemoModule } from './example/redux/redux.module';
// import { AdvancedDemoModule } from './example/advanced/advanced.module';
//component
// import { StompModule } from './component/stompjs/stomp.module';
// import { TabModule } from './component/tab/tab.module';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        HttpModule,
                        AppRoutingModule,
                        IndexModule,
                        FormDemoModule,
                        // HttpDemoModule,
                        // RouteDemoModule,
                        // AuthDemoModule,
                        DirectiveDemoModule,
                        PipeDemoModule,
                        CommunicationDemoModule,
                        DepInjectionDemoModule,
                        RxjsDemoModule,
                    ],
                    declarations: [
                        AppComponent
                    ],
                    providers: [
                        Title,
                        { provide: LocationStrategy, useClass: HashLocationStrategy },
                        { provide: APP_BASE_HREF, useValue: '/' },
                    ],
                    bootstrap: [
                        AppComponent
                    ],
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map