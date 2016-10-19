import { NgModule } from '@angular/core';

import { DirectiveComponent }   from './directive.component';
import { directiveRouting } from './directive.routing';
import { HighlightDirective } from './highlight.directive'; 

@NgModule({
    imports: [
        directiveRouting
    ],
    exports: [],
    declarations: [
        DirectiveComponent,
        HighlightDirective
    ],
    providers: [],
})
export class DirectiveDemoModule { }
