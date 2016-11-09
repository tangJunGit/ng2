import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy.routes';
export var LazyDemoModule = (function () {
    function LazyDemoModule() {
    }
    LazyDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        LazyRoutingModule
                    ],
                    exports: [],
                    declarations: [
                        LazyComponent
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    LazyDemoModule.ctorParameters = [];
    return LazyDemoModule;
}());
//# sourceMappingURL=lazy.module.js.map