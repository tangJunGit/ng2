import { NgModule } from '@angular/core';

import { DepInjectionRoutingModule } from './dep-injection.routes';
import { DepInjectionComponent }   from './dep-injection.component';


@NgModule({
    imports: [
        DepInjectionRoutingModule
    ],
    exports: [],
    declarations: [
        DepInjectionComponent
    ],
    providers: [],
})
export class DepInjectionDemoModule { }
