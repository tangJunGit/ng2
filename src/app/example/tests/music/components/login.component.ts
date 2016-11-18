import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'Login',
    template: `
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
    `
})

export class LoginComponent {
    message: string;
    
    constructor(public authService: AuthService) {
        this.message = '';
    }
    
    login(username: string, password: string): boolean {
        this.message = '';
        if (!this.authService.login(username, password)) {
            this.message = 'Incorrect credentials.';
            setTimeout(function() {
                this.message = '';
            }.bind(this), 2500);
        }
        return false;
    }
    
    logout(): boolean {
        this.authService.logout();
        return false;
    }
}