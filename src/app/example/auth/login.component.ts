import { Component, OnInit } from '@angular/core';

import { AUTH_PROVIDERS, AuthService } from './auth.service';

@Component({
    selector: 'auth-demo',
    template: ` 
        <h2>守卫 <small><a [routerLink]="['/protected']">Protected</a></small></h2>
        <form class="form-inline" *ngIf="!authService.getUser()">
            <div class="form-group">
                <label for="username">User:</label>
                <input class="form-control" name="username" #username>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input class="form-control" type="password" name="password" #password>
            </div>
            <a class="btn btn-default" (click)="login(username.value, password.value)">Submit</a>
        </form>

        <div class="well" *ngIf="authService.getUser()">
            登录用户名： <b>{{ authService.getUser() }}</b>
            <a href (click)="logout()">Log out</a>
        </div>

        <div class="alert alert-danger" role="alert" *ngIf="message">{{ message }}</div>
    `
})
export class LoginComponent implements OnInit {
    message: string;
     
    constructor(public authService: AuthService) { 
        this.message = '';
    }

    ngOnInit() { }

    login(username: string, password: string): boolean {
        this.message = '';
        if(!this.authService.login(username, password)){
            this.message = '不正确的凭证 -- 用户名/密码：user/password';
            setTimeout(function(){
                this.message = '';
            }.bind(this), 2500);
        }

        return false;
    }

    logout(): boolean{
        this.authService.logout();
        return false;
    }

}