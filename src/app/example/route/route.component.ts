import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-route',
    template: `
        <button class="btn" [routerLink]="['./', id, id2, {title:'ng2'}]" routerLinkActive="active">显示传递参数 （id:1,id2:2,title:'ng2'）</button>
        <hr>
        <router-outlet></router-outlet>
    `
})
export class RouteDemoComponent implements OnInit {
    id: string = '1';
    id2: string = '2';
    constructor() { }

    ngOnInit() { }
}