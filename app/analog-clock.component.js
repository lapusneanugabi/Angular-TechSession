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
var Rx_1 = require('rxjs/Rx');
var AnalogClockComponent = (function () {
    function AnalogClockComponent() {
        this.clock = Rx_1.Observable
            .interval(1000)
            .map(function () {
            var date = new Date();
            return date;
        });
    }
    AnalogClockComponent = __decorate([
        core_1.Component({
            selector: 'analog-clock',
            template: "\n            <div class=\"background-clock1\">\n                <svg id=\"clock\" viewBox=\"0 0 300 300\">\n\n                    <line x1=\"0\" y1=\"0\" x2=\"100\" y2=\"0\" style=\"stroke:rgb(0, 0, 0);stroke-width:2\" />\n                    <line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"100.5\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"0\" y1=\"100\" x2=\"100\" y2=\"100\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100\" style=\"stroke:rgb(0, 0, 0);stroke-width:2\" />\n\n                    <line x1=\"8\" y1=\"8\" x2=\"92.5\" y2=\"8\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"92\" y1=\"8\" x2=\"92\" y2=\"92.5\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"7.5\" y1=\"92\" x2=\"92\" y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"8\" y1=\"7.5\" x2=\"8\" y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n\n                    <line x1=\"50\" y1=\"0\" x2=\"50\" y2=\"8\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"92\" y1=\"50\" x2=\"100\" y2=\"50\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"50\" y1=\"92\" x2=\"50\" y2=\"100\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"0\" y1=\"50\" x2=\"8\" y2=\"50\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n\n                    <line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"14\" y1=\"8\" x2=\"14\" y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"17\" y1=\"8\" x2=\"17\" y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n\n                    <line x1=\"89\" y1=\"8\" x2=\"89\" y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"86\" y1=\"8\" x2=\"86\" y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"83\" y1=\"8\" x2=\"83\" y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n\n                    <line x1=\"8\" y1=\"15\" x2=\"17\" y2=\"15\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"8\" y1=\"85\" x2=\"17\" y2=\"85\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n\n                    <line x1=\"83\" y1=\"15\" x2=\"92\" y2=\"15\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n                    <line x1=\"83\" y1=\"85\" x2=\"92\" y2=\"85\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\" />\n\n                    <line *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\"\n                        [attr.x1]=\"17 + number * 1\"\n                        y1=\"8\"\n                        [attr.x2]=\"17 + number * 1\"\n                        y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.1\" />\n                    <line *ngFor=\"let number of [11,12,13,14,15,16,17,18,19,20]\"\n                        [attr.x1]=\"17 + number * 1\"\n                        y1=\"8\"\n                        [attr.x2]=\"17 + number * 1\"\n                        y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.1\" />\n                    <line *ngFor=\"let number of [21,22,23,24,25,26,27,28,29,30]\"\n                        [attr.x1]=\"17 + number * 1\"\n                        y1=\"8\"\n                        [attr.x2]=\"17 + number * 1\"\n                        y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.1\" />\n                    <line *ngFor=\"let number of [31,32,33,34,35,36,37,38,39,40]\"\n                        [attr.x1]=\"17 + number * 1\"\n                        y1=\"8\"\n                        [attr.x2]=\"17 + number * 1\"\n                        y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.1\" />\n                    <line *ngFor=\"let number of [31,32,33,34,35,36,37,38,39,40]\"\n                        [attr.x1]=\"17 + number * 1\"\n                        y1=\"8\"\n                        [attr.x2]=\"17 + number * 1\"\n                        y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.1\" />\n                    <line *ngFor=\"let number of [41,42,43,44,45,46,47,48,49,50]\"\n                        [attr.x1]=\"17 + number * 1\"\n                        y1=\"8\"\n                        [attr.x2]=\"17 + number * 1\"\n                        y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.1\" />\n                    <line *ngFor=\"let number of [51,52,53,54,55,56,57,58,59,60]\"\n                        [attr.x1]=\"17 + number * 1\"\n                        y1=\"8\"\n                        [attr.x2]=\"17 + number * 1\"\n                        y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.1\" />\n                    <line *ngFor=\"let number of [61,62,63,64,65]\"\n                        [attr.x1]=\"17 + number * 1\"\n                        y1=\"8\"\n                        [attr.x2]=\"17 + number * 1\"\n                        y2=\"92\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.1\" />\n\n                    <circle cx=\"50\" cy=\"50\" r=\"2\" stroke=\"green\" stroke-width=\"0.5\"  />\n\n                    <g id=\"hands\">\n                        <line [attr.transform] = \"'rotate(' + (clock | async | dateHand:'H') + ' 50 50)'\" id=\"min\" x1=\"50\" y1=\"50.5\" x2=\"50\" y2=\"30\" style=\"stroke:rgb(0, 0, 0);stroke-width:1.5\"/>\n                        <line [attr.transform] = \"'rotate(' + (clock | async | dateHand:'m') + ' 50 50)'\" id=\"min\" x1=\"50\" y1=\"50\" x2=\"50\" y2=\"20\" style=\"stroke:rgb(0, 0, 0);stroke-width:1\"/>\n                        <line [attr.transform] = \"'rotate(' + (clock | async | dateHand:'s') + ' 50 50)'\" id=\"sec\" x1=\"50\" y1=\"50\" x2=\"50\" y2=\"20\" style=\"stroke:rgb(0, 0, 0);stroke-width:0.5\"/>\n                    </g>\n\n                </svg>\n            </div>\n                ",
            styles: ["\n        #clock {\n            position: absolute;\n            top: 299px;\n            left: 140;\n        }\n        #face {\n            stroke-width: 2px; stroke: #fff;\n        }\n        #hour, #min, #sec {\n            stroke-width: 1px; fill: #333; stroke: #555;\n        }\n        #sec { stroke: #f55; }\n        #min { stroke: #050; }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AnalogClockComponent);
    return AnalogClockComponent;
}());
exports.AnalogClockComponent = AnalogClockComponent;
//# sourceMappingURL=analog-clock.component.js.map