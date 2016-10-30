import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user.model';

@Component({
    selector: 'my-user',
    template: `
        <button (click)="setUser()">发送</button>
        <p>接受数据：</p>
        <pre>{{newUser | json }}</pre>
    `,
    providers: [UserService]
})
export class UserComponent implements OnInit {
    newUser: User;
    constructor(private userService: UserService) {
        //订阅
        userService.currentUser.subscribe(
            (newUser: User) => {
                this.newUser = newUser;
            }
        );
     }

    ngOnInit() { }

    setUser(){
        let user: User = {
            id: '1101',
            name: '阿凡达',
            avatarSrc: 'www.avatar.com'
        };
        this.userService.setCurrentUser(user);   //发送
    }
}
