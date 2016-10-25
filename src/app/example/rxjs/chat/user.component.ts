import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user.model';

@Component({
    selector: 'my-user',
    template: `
        <button (click)="setUser()">发送</button>
    `,
    providers: [UserService]
})
export class UserComponent implements OnInit {
    constructor(private userService: UserService) {
        //订阅
        userService.currentUser.subscribe(
            (newUser: User) => {
                console.log(newUser);
            }
        );
     }

    ngOnInit() { }

    setUser(){
        let user: User;
        this.userService.setCurrentUser(user);   //发送
    }
}
