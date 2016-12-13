import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'accordion-demo',
    template: `
        <div>
            <label>
                <input type="checkbox" [(ngModel)]="oneAtATime">
                是否关闭其他
            </label>
        </div>
        <accordion [closeOthers]="oneAtATime">
            <accordion-group *ngFor="let group of groups" [heading]="group.title">
                {{ group?.content }}
            </accordion-group>
        </accordion>
    `
})
export class AccordionDemoComponent implements OnInit {
    public oneAtATime:boolean;     // 默认为 false
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