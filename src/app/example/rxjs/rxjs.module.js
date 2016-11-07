import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs.routes';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
export var RxjsDemoModule = (function () {
    function RxjsDemoModule() {
    }
    RxjsDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RxjsRoutingModule
                    ],
                    exports: [],
                    declarations: [
                        UserComponent
                    ],
                    providers: [
                        UserService
                    ],
                },] },
    ];
    /** @nocollapse */
    RxjsDemoModule.ctorParameters = [];
    return RxjsDemoModule;
}());
//# sourceMappingURL=rxjs.module.js.map