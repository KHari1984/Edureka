"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appComponent = /** @class */ (function () {
    function appComponent() {
    }
    appComponent = __decorate([
        core_1.Component({
            selector: 'edu-app',
            template: "<div>\n            <div class=\"row\">\n            <div class=\"col-md-8\">\n            <h1>Avialble Products</h1>\n            <edu-product></edu-product>\n            </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col-md-6\">\n            <h1>Orders</h1>\n            <edu-order></edu-order>\n            </div>\n            <div class=\"col-md-6\">\n            <edu-robot></edu-robot>\n            </div>\n            </div>\n</div>"
        })
    ], appComponent);
    return appComponent;
}());
exports.appComponent = appComponent;
//# sourceMappingURL=app.component.js.map