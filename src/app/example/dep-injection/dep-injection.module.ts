import { NgModule } from '@angular/core';

import { depInjectionRouting } from './dep-injection.routing';
import { DepInjectionComponent }   from './dep-injection.component';


@NgModule({
    imports: [
        depInjectionRouting
    ],
    exports: [],
    declarations: [
        DepInjectionComponent
    ],
    providers: [],
})
export class DepInjectionDemoModule { }
