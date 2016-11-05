import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipeComponent }   from './pipe.component';
import { PipeRoutingModule } from './pipe.routes';
import { ExponentialStrengthPipe } from './exponential.pipe';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PipeRoutingModule 
    ],
    exports: [],
    declarations: [
        PipeComponent,
        ExponentialStrengthPipe 
    ],
    providers: [],
})
export class PipeDemoModule { }
