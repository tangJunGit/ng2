import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { indexRouting } from './index.routing';
import { IndexComponent }   from './index.component';
import { ThemeComponent }   from './theme.component';

@NgModule({
    imports: [
    	CommonModule,
    	indexRouting
    ],
    declarations: [
    	IndexComponent,
    	ThemeComponent
    ],
    providers: [],
})
export class IndexModule { }
