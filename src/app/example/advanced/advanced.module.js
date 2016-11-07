import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedDemoComponent } from './advanced.component';
import { AdvancedRoutingModule } from './advanced.routes';
import { PopupDirective } from './popup.directive';
import { MessageComponent } from './transclusion';
import { TabComponent, TabsetComponent } from './tab.component';
export var AdvancedDemoModule = (function () {
    function AdvancedDemoModule() {
    }
    AdvancedDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AdvancedRoutingModule,
                        CommonModule
                    ],
                    exports: [],
                    declarations: [
                        AdvancedDemoComponent,
                        PopupDirective,
                        MessageComponent,
                        TabComponent,
                        TabsetComponent
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    AdvancedDemoModule.ctorParameters = [];
    return AdvancedDemoModule;
}());
//# sourceMappingURL=advanced.module.js.map