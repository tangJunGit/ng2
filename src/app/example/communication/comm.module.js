import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommRoutingModule } from './comm.routes';
import { CommunicationComponent } from './comm.component';
import { CountdownTimerComponent } from './timer.component';
import { Service1CommonComponent } from './service1-comm.component';
import { Service2CommonComponent } from './service2-comm.component';
import { ServiceCommonService } from './service-comm.service';
export var CommunicationDemoModule = (function () {
    function CommunicationDemoModule() {
    }
    CommunicationDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CommRoutingModule
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
                },] },
    ];
    /** @nocollapse */
    CommunicationDemoModule.ctorParameters = [];
    return CommunicationDemoModule;
}());
//# sourceMappingURL=comm.module.js.map