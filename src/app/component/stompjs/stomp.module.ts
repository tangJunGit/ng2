import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { stompRouting } from './stomp.routing';
import { StompComponent }   from './stomp.component';

@NgModule({
    imports: [
        CommonModule,
        stompRouting
    ],
    exports: [],
    declarations: [StompComponent],
    providers: [],
})
export class StompModule { }