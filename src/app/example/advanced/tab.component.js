import { Component, Input, ContentChildren } from '@angular/core';
export var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    TabComponent.prototype.ngOnInit = function () { };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab',
                    template: "\n        <div class=\"tab-content\">\n          <div class=\"tab-pane fade in\" [class.active]=\"active\">\n            <ng-content></ng-content>\n          </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = [];
    TabComponent.propDecorators = {
        'title': [{ type: Input, args: ['title',] },],
    };
    return TabComponent;
}());
export var TabsetComponent = (function () {
    function TabsetComponent() {
    }
    TabsetComponent.prototype.ngAfterContentInit = function () {
        this.tabs.toArray()[0].active = true; //TabComponent active默认第一个
        console.log(this.tabs.toArray()[0]);
        // TabComponent {
        //         active: true
        //         title: "First tab"
        //     }
    };
    // TabComponent active为选择的一个
    TabsetComponent.prototype.setActive = function (tab) {
        this.tabs.toArray().forEach(function (t) { return t.active = false; });
        tab.active = true;
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabset',
                    template: "\n        <ul class=\"nav nav-tabs\">\n            <li *ngFor=\"let tab of tabs\" [class.active]=\"tab.active\" (click)=\"setActive(tab)\">\n                <a class=\"item\">{{ tab.title }}</a>\n            </li>\n        </ul>\n        <ng-content></ng-content>\n    "
                },] },
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = [];
    TabsetComponent.propDecorators = {
        'tabs': [{ type: ContentChildren, args: [TabComponent,] },],
    };
    return TabsetComponent;
}());
//# sourceMappingURL=tab.component.js.map