//// [tests/cases/compiler/decoratorMetadataOnInferredType.ts] ////

//// [decoratorMetadataOnInferredType.ts]
declare var console: {
    log(msg: string): void;
};

class A {
    constructor() { console.log('new A'); }
}

function decorator(target: Object, propertyKey: string) {
}

export class B {
    @decorator
    x = new A();
}


//// [decoratorMetadataOnInferredType.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
var A = /** @class */ (function () {
    function A() {
        console.log('new A');
    }
    return A;
}());
function decorator(target, propertyKey) {
}
var B = exports.B = /** @class */ (function () {
    function B() {
        this.x = new A();
    }
    __decorate([
        decorator,
        __metadata("design:type", Object)
    ], B.prototype, "x", void 0);
    return B;
}());
