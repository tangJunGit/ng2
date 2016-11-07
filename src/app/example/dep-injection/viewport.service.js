import { SmallService } from './small.service';
import { LargeService } from './large.service';
export var ViewportService = (function () {
    function ViewportService() {
    }
    //根据宽度创建服务
    ViewportService.prototype.determineService = function () {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w < 800)
            return new SmallService();
        return new LargeService();
    };
    return ViewportService;
}());
//# sourceMappingURL=viewport.service.js.map