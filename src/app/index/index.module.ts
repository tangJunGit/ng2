import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index.routes';
import { IndexComponent }   from './index.component';
import { ThemeComponent }   from './theme.component';

@NgModule({
    imports: [
    	CommonModule,
    	IndexRoutingModule
    ],
    declarations: [
    	IndexComponent,
    	ThemeComponent
    ],
    providers: [],
})
export class IndexModule { }
