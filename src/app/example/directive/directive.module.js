import { NgModule } from '@angular/core';
import { DirectiveComponent } from './directive.component';
import { DirectiveRoutingModule } from './directive.routes';
import { HighlightDirective } from './highlight.directive';
export var DirectiveDemoModule = (function () {
    function DirectiveDemoModule() {
    }
    DirectiveDemoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DirectiveRoutingModule
                    ],
                    exports: [],
                    declarations: [
                        DirectiveComponent,
                        HighlightDirective
                    ],
                    providers: [],
                },] },
    ];
    /** @nocollapse */
    DirectiveDemoModule.ctorParameters = [];
    return DirectiveDemoModule;
}());
//# sourceMappingURL=directive.module.js.map