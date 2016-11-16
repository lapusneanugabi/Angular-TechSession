"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/*
 * Usage:
 *   value | dateHand:component
*/
var dateHandPipe = (function () {
    function dateHandPipe() {
    }
    dateHandPipe.prototype.transform = function (date, component) {
        var result = 0;
        if (date) {
            switch (component) {
                case 'H':
                    result = 30 * (date.getHours() % 12) + date.getMinutes() / 2;
                    break;
                case 'm':
                    result = 6 * date.getMinutes();
                    break;
                case 's':
                    result = 6 * date.getSeconds();
                    break;
            }
        }
        return result;
    };
    dateHandPipe = __decorate([
        core_1.Pipe({ name: 'dateHand' }), 
        __metadata('design:paramtypes', [])
    ], dateHandPipe);
    return dateHandPipe;
}());
exports.dateHandPipe = dateHandPipe;
//# sourceMappingURL=date-hand.pipe.js.map