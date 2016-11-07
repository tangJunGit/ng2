import { Component } from '@angular/core';
export var IndexComponent = (function () {
    function IndexComponent() {
        this.theme = 'theme-blue';
    }
    IndexComponent.prototype.ngOnInit = function () { };
    IndexComponent.prototype.updateTheme = function (theme) {
        this.theme = theme;
    };
    IndexComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-index',
                    template: "\n        <main [ngClass]=\"theme\">\n            <a class=\"btn btn-primary btn-lg\" (click)=\"updateTheme('theme-blue')\">\u84DD\u8272\u4E3B\u9898</a>\n            <a class=\"btn btn-success btn-lg\" (click)=\"updateTheme('theme-green')\">\u7EFF\u8272\u4E3B\u9898</a>\n            <a class=\"btn btn-danger btn-lg\" (click)=\"updateTheme('theme-red')\">\u7EA2\u8272\u4E3B\u9898</a>\n            <my-theme [ngClass]=\"theme\"></my-theme>\n        </main>\n    ",
                    styleUrls: ['./host.css']
                },] },
    ];
    /** @nocollapse */
    IndexComponent.ctorParameters = [];
    return IndexComponent;
}());
//# sourceMappingURL=index.component.js.map