import { Component } from '@angular/core';
export var TabDemoComponent = (function () {
    function TabDemoComponent() {
        this.tabs = [
            { title: 'First tab', content: 'This is first content' },
            { title: 'Second tab', content: 'This is second content' },
            { title: 'Third  tab', content: 'This is third content' },
        ];
    }
    TabDemoComponent.prototype.ngOnInit = function () { };
    TabDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab-demo',
                    template: "\n        <h2>Tab</h2>\n        <tabset>\n            <tab *ngFor=\"let tab of tabs\" [title]=\"tab.title\">{{ tab.content }}</tab>\n        </tabset>\n    "
                },] },
    ];
    /** @nocollapse */
    TabDemoComponent.ctorParameters = [];
    return TabDemoComponent;
}());
//# sourceMappingURL=tab-demo.component.js.map