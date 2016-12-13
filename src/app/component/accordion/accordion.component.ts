import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'accordion-group',
    template: `
        <div class="panel">
            <div class="panel-heading" (click)="toggleOpen($event)">
                <h4 class="panel-title">
                    <a href>
                        <span *ngIf="heading">{{heading}}</span>
                    </a>
                </h4>
            </div>
            <div class="panel-collapse" [collapse]="isOpen">
                <div class="panel-body">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./accordion-group.css']
})
export class AccordionGroupComponent implements OnInit {
    isOpen: Boolean = true;
    @Input() heading:string;
    constructor() { }

    ngOnInit() { }

    toggleOpen(event:MouseEvent):any {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
}


@Component({
    selector: 'accordion',
    template: `<ng-content></ng-content>`
})
export class AccordionComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
