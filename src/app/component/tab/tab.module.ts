import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab.routes';
import { TabDemoComponent }   from './tab-demo.component';
import { TabComponent, TabsetComponent }   from './tab.component';

@NgModule({
    imports: [
        CommonModule,
        TabRoutingModule
    ],
    exports: [],
    declarations: [
        TabDemoComponent,
        TabComponent,
        TabsetComponent
    ],
    providers: [],
})
export class TabDemoModule { }
