import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { commRouting } from './comm.routing';
import { CommunicationComponent }   from './comm.component';
import { CountdownTimerComponent } from './timer.component';
import { Service1CommonComponent } from './service1-comm.component';
import { Service2CommonComponent } from './service2-comm.component';
import { ServiceCommonService } from './service-comm.service'; 

@NgModule({ 
    imports: [
        CommonModule,
        commRouting
    ],
    exports: [],
    declarations: [
        CommunicationComponent,
        CountdownTimerComponent,
        Service1CommonComponent,
        Service2CommonComponent
    ],
    providers: [
        ServiceCommonService
    ],
})
export class CommunicationDemoModule { }
