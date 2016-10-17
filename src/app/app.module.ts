import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

//example
import { DisplayModule } from './display/display.module';
import { FormDemoModule } from './example/forms/form.module';
import { HttpDemoModule } from './example/http/http.module';

//component
import { StompModule } from './component/stompjs/stomp.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        DisplayModule,
        FormDemoModule,
        HttpDemoModule,
        StompModule
    ],
    declarations: [
        AppComponent
    ],
    //providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
