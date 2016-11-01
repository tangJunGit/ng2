import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[message]',
    inputs: ['header'],
    host: {
        'class': 'panel panel-default'
    },
    template: `
        <div class="panel-heading">{{header}}</div>
        <div class="panel-body">
            <ng-content></ng-content>
        </div>
    `
})
export class MessageComponent implements OnInit {
    header: string;

    constructor() { }

    ngOnInit() { }
}