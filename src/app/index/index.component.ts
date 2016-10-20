import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-index',
    template: `
        <main>
            <img src="../../../resource/angular.png">
            <h2>Example</h2>
            <a [routerLink]="['/form']" class="btn btn-primary btn-lg">Form</a>
            <a [routerLink]="['/form-builder']" class="btn btn-primary btn-lg">FormBuilder</a>
            <a [routerLink]="['/form-validation']" class="btn btn-primary btn-lg">Validations</a>
            <a [routerLink]="['/http']" class="btn btn-primary btn-lg">Http</a>
            <a [routerLink]="['/http-search']" class="btn btn-primary btn-lg">Http (Search Demo)</a>
            <a [routerLink]="['/route']" class="btn btn-primary btn-lg">Route</a>
            <a [routerLink]="['/auth']" class="btn btn-primary btn-lg">Auth(守卫)</a>
            <a [routerLink]="['/directive']" class="btn btn-primary btn-lg">Directive</a>
            <a [routerLink]="['/pipe']" class="btn btn-primary btn-lg">Pipe</a>
            <a [routerLink]="['/communication']" class="btn btn-primary btn-lg">组件交互</a>
            <h2>Component</h2>
            <a [routerLink]="['/stomp']" class="btn btn-primary btn-lg">Stomp</a>
        </main> 
    `,
    styles: [`
        main {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            color: #fff;
            text-align: center;
            background: #286090;
            overflow: auto;
        }
    `]
})
export class IndexComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}