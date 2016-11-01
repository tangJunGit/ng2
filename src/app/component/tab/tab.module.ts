import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { tabRouting } from './tab.routing';
import { TabDemoComponent }   from './tab-demo.component';
import { TabComponent, TabsetComponent }   from './tab.component';

@NgModule({
    imports: [
        CommonModule,
        tabRouting
    ],
    exports: [],
    declarations: [
        TabDemoComponent,
        TabComponent,
        TabsetComponent
    ],
    providers: [],
})
export class TabModule { }
