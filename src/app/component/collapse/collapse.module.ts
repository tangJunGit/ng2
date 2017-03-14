import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CollapseDemoComponent }   from './collapse-demo.component';     // demo
import { CollapseDirective } from './collapse.directive';                // 指令

@NgModule({
    imports: [
        RouterModule.forChild([{ path: 'collapse', component: CollapseDemoComponent }]),
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
export class CollapseModule { }
