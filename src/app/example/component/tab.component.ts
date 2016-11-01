import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
    selector: 'tab',
    template: `
        <div class="tab-content">
          <div class="tab-pane fade in" [class.active]="active">
            <ng-content></ng-content>
          </div>
        </div>
    `
})
export class TabComponent implements OnInit {
    @Input('title') title:string; 
    active: boolean = false;    
    name: string;

    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'tabset',
    template: `
        <ul class="nav nav-tabs">
            <li *ngFor="let tab of tabs" [class.active]="tab.active" (click)="setActive(tab)">
                <a class="item">{{ tab.title }}</a>
            </li>
        </ul>
        <ng-content></ng-content>
    `
})
export class TabsetComponent implements AfterContentInit {
    // 获取 TabComponent
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    constructor() { }

    ngAfterContentInit() { 
        this.tabs.toArray()[0].active = true;   //TabComponent active默认第一个
        console.log(this.tabs.toArray()[0]);
        // TabComponent {
        //         active: true
        //         title: "First tab"
        //     }
    }

    // TabComponent active为选择的一个
    setActive(tab: TabComponent) {   
        this.tabs.toArray().forEach((t) => t.active = false);
        tab.active = true;
    }
}