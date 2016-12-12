import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'component-demo',
    template: `
        <h2>Popup</h2>
        <div class="panel panel-default" popup #p1="popup" text="Clicked the message">
            <div class="panel-heading">Learning Directives</div>
            <div class="panel-body">
                This should use our Popup diretive
            </div>
        </div>
        <button popup #p2="popup" text="Clicked the button">Clicked the button</button>

        <div>
            <button (click)="p1.displayMessage()" class="ui button">Display popup for element</button>
            <button (click)="p2.displayMessage()" class="ui button">Display popup for button</button>
        </div>
        <hr />

        <h2>Transclusion</h2>
        <div message header="My message">
            This is the content of the message
        </div> 
        <hr />
    `
})
export class AdvancedDemoComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}