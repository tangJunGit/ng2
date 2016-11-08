import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lazy-demo',
    template: `
        <h2>懒加载 loadchildren</h2>
    `
})
export class LazyComponent implements OnInit {

    constructor() {  }

    ngOnInit() { }
}
