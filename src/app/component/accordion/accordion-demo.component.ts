import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'accordion-demo',
    template: `
        <accordion class="panel-group">
            <accordion-group *ngFor="let group of groups" [heading]="group.title">
                {{ group?.content }}
            </accordion-group>
        </accordion>
    `
})
export class AccordionDemoComponent implements OnInit {
    groups:Array<any> = [
        {
            title: '菜单 - 1',
            content: '内容 - 1'
        },
        {
            title: '菜单 - 2',
            content: '内容 - 2'
        }
    ];

    constructor() { }

    ngOnInit() { }
}