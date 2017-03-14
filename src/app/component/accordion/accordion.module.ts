import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CollapseModule } from '../collapse';
import { AccordionDemoComponent }   from './accordion-demo.component';                     // demo
import { AccordionComponent, AccordionGroupComponent } from './accordion.component';       // 组件

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([{ path: 'accordion', component: AccordionDemoComponent }]),
        CollapseModule,
    ],
    exports: [],
    declarations: [
        AccordionDemoComponent,
        AccordionComponent,
        AccordionGroupComponent
    ],
    providers: [],
})
export class AccordionModule { }
