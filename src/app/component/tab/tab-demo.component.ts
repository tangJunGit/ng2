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
            { title: 'First tab', content: 'This is first content' },
            { title: 'Second tab', content: 'This is second content' },
            { title: 'Third  tab', content: 'This is third content' },
        ];
    }

    ngOnInit() { }
}