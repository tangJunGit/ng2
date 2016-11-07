import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
export var ThemeComponent = (function () {
    function ThemeComponent(titleService) {
        this.titleService = titleService;
    }
    ThemeComponent.prototype.ngOnInit = function () { };
    //设置title
    ThemeComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    ThemeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-theme',
                    templateUrl: './theme.component.html',
                    styleUrls: ['./child.css'],
                    // 控制视图的包装模式
                    // Native 模式使用浏览器原生的 Shadow DOM 实现来为组件的宿主元素附加一个 Shadow DOM
                    // Emulated 模式 ( 默认值 ) 通过预处理 ( 并改名 )CSS 代码来仿真 Shadow DOM 的行为，以达到把 CSS 样式局限在组件视图中的目的
                    // None 意味着 Angular 不使用视图包装。 Angular 会把 CSS 添加到全局样式中。
                    encapsulation: ViewEncapsulation.Emulated
                },] },
    ];
    /** @nocollapse */
    ThemeComponent.ctorParameters = [
        { type: Title, },
    ];
    return ThemeComponent;
}());
//# sourceMappingURL=theme.component.js.map