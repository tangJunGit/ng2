import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'protected',
    template: `
        <h1>Protected content</h1>
    `
})
export class ProtectedComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}