import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing'; 
import { DisplayModule } from './display/display.module';
import { FormDemoModule } from './example/forms/form.module';
import { HttpDemoModule } from './example/http/http.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        DisplayModule,
        FormDemoModule,
        HttpDemoModule
    ],
    declarations: [
        AppComponent
    ],
    //providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
