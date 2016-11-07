import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe.component';
import { PipeRoutingModule } from './pipe.routes';
import { ExponentialStrengthPipe } from './exponential.pipe';
export var PipeDemoModule = (function () {
    function PipeDemoModule() {
    }
    PipeDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule,
                        PipeRoutingModule
                    ],
                    exports: [],
                    declarations: [
                        PipeComponent,
                        ExponentialStrengthPipe
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    PipeDemoModule.ctorParameters = [];
    return PipeDemoModule;
}());
//# sourceMappingURL=pipe.module.js.map