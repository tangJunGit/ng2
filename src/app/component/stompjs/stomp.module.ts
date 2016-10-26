import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { stompRouting } from './stomp.routing';
import { StompComponent }   from './stomp.component';
import { StompService } from './stomp.service';
import { ConfigService } from './config.service';

@NgModule({
    imports: [
        CommonModule,
        stompRouting
    ],
    exports: [],
    declarations: [StompComponent],
    providers: [
        StompService,
        ConfigService
    ],
})
export class StompModule { }