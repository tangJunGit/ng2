import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDemoComponent }   from './advanced.component';
import { AdvancedRoutingModule } from './advanced.routes';
import { PopupDirective } from './popup.directive';
import { MessageComponent } from './transclusion';
import { TabComponent, TabsetComponent } from './tab.component';

@NgModule({
    imports: [
        AdvancedRoutingModule,
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
