import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule }   from './pagination.route';
import { PaginationComponent }   from './pagination.component';
import { PaginationDemoComponent }   from './pagination-demo.component';

@NgModule({
    imports: [
        CommonModule,
        PaginationRoutingModule
    ],
    exports: [],
    declarations: [
        PaginationComponent,
        PaginationDemoComponent
    ],
    providers: [],
})
export class PaginationModule { }
