import { NgModule } from '@angular/core';

import { ModalDemoComponent }   from './modal-demo.component';
import { ModalDemoRoutingModule } from './modal.routes';
import { ModelDirective } from './modal.directive';

@NgModule({
    imports: [
        ModalDemoRoutingModule
    ],
    exports: [],
    declarations: [
        ModalDemoComponent,
        ModelDirective
    ],
    providers: [],
})
export class ModalDemoModule { }
