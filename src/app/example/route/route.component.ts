import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-route',
    template: `
        <button class="btn" [routerLink]="['./', id]">带参数 （id:1）</button>
    `
})
export class RouteDemoComponent implements OnInit {
    id: string = '1';

    constructor() { }

    ngOnInit() { }
}