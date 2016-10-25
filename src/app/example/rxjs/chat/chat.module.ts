import { NgModule } from '@angular/core';

import { ChatThreadComponent }   from './thread.component';
import { chatRouting } from './chat.routing';

@NgModule({
    imports: [
        chatRouting
    ],
    exports: [],
    declarations: [
        ChatThreadComponent
    ],
    providers: [],
})
export class ChatDemoModule { }
 