import { NgModule } from '@angular/core';

import { displayRouting } from './display.routing';
import { DisplayComponent }   from './display.component';

@NgModule({
    imports: [displayRouting],
    declarations: [DisplayComponent],
    providers: [],
})
export class DisplayModule { }
