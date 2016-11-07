import { Component } from '@angular/core';
export var AdvancedDemoComponent = (function () {
    function AdvancedDemoComponent() {
        this.tabs = [
            { title: 'About', content: 'This is the About tab' },
            { title: 'Blog', content: 'This is our blog' },
            { title: 'Contact us', content: 'Contact us here' },
        ];
    }
    AdvancedDemoComponent.prototype.ngOnInit = function () { };
    AdvancedDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'component-demo',
                    template: "\n        <h2>Popup</h2>\n        <div class=\"panel panel-default\" popup #p1=\"popup\" text=\"Clicked the message\">\n            <div class=\"panel-heading\">Learning Directives</div>\n            <div class=\"panel-body\">\n                This should use our Popup diretive\n            </div>\n        </div>\n        <button popup #p2=\"popup\" text=\"Clicked the button\">Clicked the button</button>\n\n        <div>\n            <button (click)=\"p1.displayMessage()\" class=\"ui button\">Display popup for element</button>\n            <button (click)=\"p2.displayMessage()\" class=\"ui button\">Display popup for button</button>\n        </div>\n        <hr />\n\n        <h2>Transclusion</h2>\n        <div message header=\"My message\">\n            This is the content of the message\n        </div> \n        <hr />\n\n        <h2>Tab</h2>\n        <tabset>\n            <tab title=\"First tab\">\n                This is the first tab\n            </tab>\n            <tab *ngFor=\"let tab of tabs\" [title]=\"tab.title\">{{ tab.content }}</tab>\n        </tabset>\n\n    "
                },] },
    ];
    /** @nocollapse */
    AdvancedDemoComponent.ctorParameters = [];
    return AdvancedDemoComponent;
}());
//# sourceMappingURL=advanced.component.js.map