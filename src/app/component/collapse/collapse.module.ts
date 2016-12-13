import { NgModule } from '@angular/core';

import { CollapseDemoComponent }   from './collapse-demo.component';
import { CollapseRoutingModule } from './collapse.routes';
import { CollapseDirective } from './collapse.directive';

@NgModule({
    imports: [
        CollapseRoutingModule
    ],
    exports: [
        CollapseDirective
    ],
    declarations: [
        CollapseDemoComponent,
        CollapseDirective
    ],
    providers: [],
})
export class CollapseDemoModule { }
