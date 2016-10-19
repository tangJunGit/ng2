import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeComponent }   from './pipe.component';
import { pipeRouting } from './pipe.routing';
import { ExponentialStrengthPipe } from './exponential.pipe';

@NgModule({
    imports: [
        CommonModule,
        pipeRouting 
    ],
    exports: [],
    declarations: [
        PipeComponent,
        ExponentialStrengthPipe
    ],
    providers: [],
})
export class PipeDemoModule { }
