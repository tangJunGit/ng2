import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-directive',
    template: `
        <h1>My First Attribute Directive</h1>
        <h4>Pick a highlight color</h4>
        <div>
            <input type="radio" name="colors" (click)="color='lightgreen'">Green
            <input type="radio" name="colors" (click)="color='yellow'">Yellow
            <input type="radio" name="colors" (click)="color='cyan'">Cyan
        </div>
        <p [myHighlight]="color" [defaultColor]="'violet'">Highlight me! (有默认颜色)</p>
        
        <p [myHighlight]="color">Highlight me!(无默认颜色)</p>
        
    `
})
export class DirectiveComponent implements OnInit {
    color: string;
    
    constructor() { }

    ngOnInit() { }
}