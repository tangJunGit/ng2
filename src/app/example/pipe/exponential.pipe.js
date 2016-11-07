import { Pipe } from '@angular/core';
export var ExponentialStrengthPipe = (function () {
    function ExponentialStrengthPipe() {
    }
    ExponentialStrengthPipe.prototype.transform = function (value, exponent) {
        var exp = parseFloat(exponent + '');
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    };
    ExponentialStrengthPipe.decorators = [
        { type: Pipe, args: [{ name: 'exponentialStrength' },] },
    ];
    /** @nocollapse */
    ExponentialStrengthPipe.ctorParameters = [];
    return ExponentialStrengthPipe;
}());
//# sourceMappingURL=exponential.pipe.js.map