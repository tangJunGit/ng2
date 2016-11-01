import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentDemoComponent }   from './demo.component';
import { componentRouting } from './component.routing';
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
        ComponentDemoComponent,
        PopupDirective,
        MessageComponent,
        TabComponent,
        TabsetComponent
    ],
    providers: [],
})
export class ComponentDemoModule { }
