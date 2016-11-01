import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDemoComponent }   from './advanced.component';
import { componentRouting } from './advanced.routing';
import { PopupDirective } from './popup.directive';
import { MessageComponent } from './transclusion';
import { TabComponent, TabsetComponent } from './tab.component';

@NgModule({
    imports: [
        componentRouting,
        CommonModule
    ],
    exports: [],
    declarations: [
        AdvancedDemoComponent,
        PopupDirective,
        MessageComponent,
        TabComponent,
        TabsetComponent
    ],
    providers: [],
})
export class AdvancedDemoModule { }
