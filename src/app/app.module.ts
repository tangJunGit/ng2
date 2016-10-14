import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing'; 
import { DisplayModule } from './display/display.module';
import { FormBuilderDemoModule } from './example/forms/form.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        DisplayModule,
        FormBuilderDemoModule
    ],
    declarations: [
        AppComponent
    ],
    //providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
