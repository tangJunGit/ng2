import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StompRoutingModule } from './stomp.routes';
import { StompComponent } from './stomp-demo.component';
import { StompService } from './stomp.service';
import { ConfigService } from './config.service';
export var StompModule = (function () {
    function StompModule() {
    }
    StompModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    StompModule.ctorParameters = [];
    return StompModule;
}());
//# sourceMappingURL=stomp.module.js.map