import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
    selector: 'my-thread',
    template: `
        
    `,
    providers: [UserService]
})
export class ChatThreadComponent implements OnInit {

    constructor(private userService: UserService) {}

    ngOnInit() { }
}