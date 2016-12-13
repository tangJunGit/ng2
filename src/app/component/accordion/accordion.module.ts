import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion.routes';
import { AccordionDemoComponent }   from './accordion-demo.component';
import { AccordionComponent, AccordionGroupComponent } from './accordion.component';

@NgModule({
    imports: [
        CommonModule,
        AccordionRoutingModule
    ],
    exports: [],
    declarations: [
        AccordionDemoComponent,
        AccordionComponent,
        AccordionGroupComponent
    ],
    providers: [],
})
export class AccordionDemoModule { }
