import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import {HomeComponent} from './components/home.component';
import {AboutComponent} from './components/about.component';
import {ContactComponent} from './components/contact.component';
import {ProtectedComponent} from './components/protected.component';
import {ArticlesComponent} from './components/article.component';

import {AUTH_PROVIDERS} from './services/auth.service';    
import {LoggedInGuard} from './components/loggedIn.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard]},
    { path: 'articles/:id', component: ArticlesComponent }
];

@NgModule({
    declarations: [ 
        RoutesDemoApp,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ], 
    bootstrap: [ RoutesDemoApp ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
})

class RoutesDemoAppModule{
    constructor(){}
}

platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule).catch((err: any) => console.error(err));

@Component({
    selector: 'router-app',
    template: `
        <div class="page-header">
            <div class="container">
                <h1>Router Sample</h1>
                <div class="navLinks">
                    <a [routerLink]="['/home']">Home</a>
                    <a [routerLink]="['/about']">About</a>
                    <a [routerLink]="['/contact']">Contact us</a>
                    <a [routerLink]="['/protected']">Protected</a>
                </div>
            </div>
        </div>
        <div id="content">
            <div class="container">
                <login></login>
                <hr>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
class RoutesDemoApp {
    constructor(public router: Router) {}
}