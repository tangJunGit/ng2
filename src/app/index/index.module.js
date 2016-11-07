import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index.routes';
import { IndexComponent } from './index.component';
import { ThemeComponent } from './theme.component';
export var IndexModule = (function () {
    function IndexModule() {
    }
    IndexModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IndexRoutingModule
                    ],
                    declarations: [
                        IndexComponent,
                        ThemeComponent
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    IndexModule.ctorParameters = [];
    return IndexModule;
}());
//# sourceMappingURL=index.module.js.map