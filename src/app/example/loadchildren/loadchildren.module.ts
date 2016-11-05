import { NgModule } from '@angular/core';

import { LoadchildrenDemoComponent, SubComponent }   from './loadchildren.component';
import { LoadchildrenRoutingModule } from './loadchildren.routes';

@NgModule({
    imports: [
        LoadchildrenRoutingModule
    ],
    exports: [],
    declarations: [
        LoadchildrenDemoComponent,
        SubComponent
    ],
    providers: [],
})
export class LoadchildrenDemoModule { }