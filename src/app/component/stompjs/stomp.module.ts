import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { StompRoutingModule } from './stomp.routes';
import { StompComponent }   from './stomp-demo.component';
import { StompService } from './stomp.service';
import { ConfigService } from './config.service';

@NgModule({
    imports: [
        CommonModule,
        StompRoutingModule
    ],
    exports: [],
    declarations: [StompComponent],
    providers: [
        StompService,
        ConfigService
    ],
})
export class StompDemoModule { }