import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'accordion-group',
    template: `
        <div class="panel">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a href="javascript:void(0)">
                        <span *ngIf="heading">{{heading}}</span>
                    </a>
                </h4>
            </div>
            <div class="panel-collapse">
                <div class="panel-body">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./accordion-group.css']
})
export class AccordionGroupComponent implements OnInit {
    @Input() heading:string;
    constructor() { }

    ngOnInit() { }
}


@Component({
    selector: 'accordion',
    template: `<ng-content></ng-content>`
})
export class AccordionComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
