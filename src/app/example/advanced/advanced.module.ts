import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedDemoComponent }   from './advanced.component';
import { AdvancedRoutingModule } from './advanced.routes';
import { PopupDirective } from './popup.directive';
import { MessageComponent } from './transclusion';

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
    ],
    providers: [],
})
export class AdvancedDemoModule { }
