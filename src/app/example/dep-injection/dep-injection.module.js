import { NgModule } from '@angular/core';
import { DepInjectionRoutingModule } from './dep-injection.routes';
import { DepInjectionComponent } from './dep-injection.component';
export var DepInjectionDemoModule = (function () {
    function DepInjectionDemoModule() {
    }
    DepInjectionDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DepInjectionRoutingModule
                    ],
                    exports: [],
                    declarations: [
                        DepInjectionComponent
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    DepInjectionDemoModule.ctorParameters = [];
    return DepInjectionDemoModule;
}());
//# sourceMappingURL=dep-injection.module.js.map