import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { stompRouting } from './stomp.routing';
import { StompComponent }   from './stomp.component';
import { StompService } from './stomp.service';

@NgModule({
    imports: [
        CommonModule,
        stompRouting
    ],
    exports: [],
    declarations: [StompComponent],
    providers: [
        StompService,
    ],
})
export class StompModule { }