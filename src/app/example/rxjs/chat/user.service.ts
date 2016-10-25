import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs/RX'; 

import { User } from './user.model';

@Injectable()
export class UserService {
    currentUser: Subject<User> = new BehaviorSubject<User>(null)    //设置流 默认值为null

    constructor() { }

    setCurrentUser(newUser: User): void{
        this.currentUser.next(newUser);
    }
}

export var userServiceInjectables: Array<any> = [UserService];

