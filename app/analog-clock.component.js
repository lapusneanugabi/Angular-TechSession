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
            template: "\n                <svg id=\"clock\" viewBox=\"0 0 300 300\">\n                    <circle id=\"face\" cx=\"50\" cy=\"50\" r=\"45\"/>\n                    <g id=\"hands\">\n                        <rect [attr.transform] = \"'rotate(' + (clock | async | dateHand:'H')  + ' 50 50)'\" id=\"hour\" x=\"46.5\" y=\"22\" width=\"5\" height=\"30\" rx=\"2.5\" ry=\"2.55\" />\n                        <rect [attr.transform] = \"'rotate(' + (clock | async | dateHand:'m') + ' 50 50)'\" id=\"min\" x=\"48\" y=\"12.5\" width=\"2\" height=\"40\" rx=\"2\" ry=\"2\"/>\n                        <line [attr.transform] = \"'rotate(' + (clock | async | dateHand:'s') + ' 50 50)'\" id=\"sec\" x1=\"50\" y1=\"50\" x2=\"50\" y2=\"16\" />\n                    </g>\n                </svg>\n                ",
            styles: ["\n        #face {\n            stroke-width: 2px; stroke: #fff; \n        }\n        #hour, #min, #sec {\n            stroke-width: 1px; fill: #333; stroke: #555;\n        }\n        #sec { stroke: #f55; }\n        #min { stroke: #050; }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AnalogClockComponent);
    return AnalogClockComponent;
}());
exports.AnalogClockComponent = AnalogClockComponent;
//# sourceMappingURL=analog-clock.component.js.map