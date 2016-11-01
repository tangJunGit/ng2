import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[popup]',
    inputs: ['text'],
    exportAs: 'popup',
    host: {
        '(click)': 'displayMessage()'
    }
})
export class PopupDirective {
    text:string;

    constructor(private el: ElementRef) { 
        console.log(el);
    }

    displayMessage(): void{
        alert(this.text);
    }
    
}