import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';
export var HighlightDirective = (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._defaultColor = 'red';
    }
    Object.defineProperty(HighlightDirective.prototype, "defaultColor", {
        set: function (colorName) {
            this._defaultColor = colorName || this._defaultColor;
        },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor || this._defaultColor);
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    };
    HighlightDirective.decorators = [
        { type: Directive, args: [{ selector: '[myHighlight]' },] },
    ];
    /** @nocollapse */
    HighlightDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    HighlightDirective.propDecorators = {
        'highlightColor': [{ type: Input, args: ['myHighlight',] },],
        'defaultColor': [{ type: Input },],
        'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: HostListener, args: ['mouseleave',] },],
    };
    return HighlightDirective;
}());
//# sourceMappingURL=highlight.directive.js.map