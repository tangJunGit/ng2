import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TabDemoComponent }   from './tab-demo.component';           // demo
import { TabComponent, TabsetComponent }   from './tab.component';   // 组件导入

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: 'tab', component: TabDemoComponent }])
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
