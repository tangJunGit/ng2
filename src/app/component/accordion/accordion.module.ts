import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CollapseDemoModule } from '../collapse/index';
import { AccordionRoutingModule } from './accordion.routes';
import { AccordionDemoComponent }   from './accordion-demo.component';
import { AccordionComponent, AccordionGroupComponent } from './accordion.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AccordionRoutingModule,
        CollapseDemoModule
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
