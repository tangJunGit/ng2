import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabRoutingModule } from './tab.routes';
import { TabDemoComponent } from './tab-demo.component';
import { TabComponent, TabsetComponent } from './tab.component';
export var TabModule = (function () {
    function TabModule() {
    }
    TabModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        TabRoutingModule
                    ],
                    exports: [],
                    declarations: [
                        TabDemoComponent,
                        TabComponent,
                        TabsetComponent
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    TabModule.ctorParameters = [];
    return TabModule;
}());
//# sourceMappingURL=tab.module.js.map