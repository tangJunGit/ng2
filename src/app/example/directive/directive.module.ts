import { NgModule } from '@angular/core';

import { DirectiveComponent }   from './directive.component';
import { DirectiveRoutingModule } from './directive.routes';
import { HighlightDirective } from './highlight.directive'; 

@NgModule({
    imports: [
        DirectiveRoutingModule
    ],
    exports: [],
    declarations: [
        DirectiveComponent,
        HighlightDirective
    ],
    providers: [],
})
export class DirectiveDemoModule { }
