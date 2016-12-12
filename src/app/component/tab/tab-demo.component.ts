import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tab-demo',
    template: `
        <h2>Tab</h2>
        <tabset>
            <tab *ngFor="let tab of tabs" [title]="tab.title">{{ tab.content }}</tab>
        </tabset>
    `
})
export class TabDemoComponent implements OnInit {
    tabs: any;

    constructor() { 
        this.tabs = [
            { title: 'tab 1', content: '------内容： 11111111111------' },
            { title: 'tab 2', content: '------内容： 222222222222------' },
            { title: 'tab 3', content: '------内容： 3333333333333------' },
        ];
    }

    ngOnInit() { }
}