import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'loadchildren-demo',
    template: `
        <h2>懒加载 loadchildren</h2>
        <router-outlet></router-outlet>
    `
})
export class LoadchildrenDemoComponent implements OnInit {

    constructor() {  }

    ngOnInit() { }
}

@Component({
    selector: 'sub-demo',
    template: `
        <h2>懒加载 loadchildren</h2>
    `
})
export class SubComponent implements OnInit {

    constructor() {  }

    ngOnInit() { }
}