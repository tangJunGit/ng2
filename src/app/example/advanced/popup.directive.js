import { Directive, ElementRef } from '@angular/core';
export var PopupDirective = (function () {
    function PopupDirective(el) {
        this.el = el;
        console.log(el);
    }
    PopupDirective.prototype.displayMessage = function () {
        alert(this.text);
    };
    PopupDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[popup]',
                    inputs: ['text'],
                    exportAs: 'popup',
                    host: {
                        '(click)': 'displayMessage()'
                    }
                },] },
    ];
    /** @nocollapse */
    PopupDirective.ctorParameters = [
        { type: ElementRef, },
    ];
    return PopupDirective;
}());
//# sourceMappingURL=popup.directive.js.map