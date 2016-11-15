import  {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'analog-clock',
    template:  `
            <div class="background-clock1">
                <svg id="clock" viewBox="0 0 300 300">

                    <line x1="0" y1="0" x2="100" y2="0" style="stroke:rgb(0, 0, 0);stroke-width:2" />
                    <line x1="100" y1="0" x2="100" y2="100.5" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="0" y1="100" x2="100" y2="100" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="0" y1="0" x2="0" y2="100" style="stroke:rgb(0, 0, 0);stroke-width:2" />

                    <line x1="8" y1="8" x2="92.5" y2="8" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="92" y1="8" x2="92" y2="92.5" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="7.5" y1="92" x2="92" y2="92" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="8" y1="7.5" x2="8" y2="92" style="stroke:rgb(0, 0, 0);stroke-width:1" />

                    <line x1="50" y1="0" x2="50" y2="8" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="92" y1="50" x2="100" y2="50" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="50" y1="92" x2="50" y2="100" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="0" y1="50" x2="8" y2="50" style="stroke:rgb(0, 0, 0);stroke-width:1" />

                    <line x1="11" y1="8" x2="11" y2="92" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="14" y1="8" x2="14" y2="92" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="17" y1="8" x2="17" y2="92" style="stroke:rgb(0, 0, 0);stroke-width:1" />

                    <line x1="89" y1="8" x2="89" y2="92" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="86" y1="8" x2="86" y2="92" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="83" y1="8" x2="83" y2="92" style="stroke:rgb(0, 0, 0);stroke-width:1" />

                    <line x1="8" y1="15" x2="17" y2="15" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="8" y1="85" x2="17" y2="85" style="stroke:rgb(0, 0, 0);stroke-width:1" />

                    <line x1="83" y1="15" x2="92" y2="15" style="stroke:rgb(0, 0, 0);stroke-width:1" />
                    <line x1="83" y1="85" x2="92" y2="85" style="stroke:rgb(0, 0, 0);stroke-width:1" />

                    <line *ngFor="let number of [1,2,3,4,5,6,7,8,9,10]"
                        [attr.x1]="17 + number * 1"
                        y1="8"
                        [attr.x2]="17 + number * 1"
                        y2="92" style="stroke:rgb(0, 0, 0);stroke-width:0.1" />
                    <line *ngFor="let number of [11,12,13,14,15,16,17,18,19,20]"
                        [attr.x1]="17 + number * 1"
                        y1="8"
                        [attr.x2]="17 + number * 1"
                        y2="92" style="stroke:rgb(0, 0, 0);stroke-width:0.1" />
                    <line *ngFor="let number of [21,22,23,24,25,26,27,28,29,30]"
                        [attr.x1]="17 + number * 1"
                        y1="8"
                        [attr.x2]="17 + number * 1"
                        y2="92" style="stroke:rgb(0, 0, 0);stroke-width:0.1" />
                    <line *ngFor="let number of [31,32,33,34,35,36,37,38,39,40]"
                        [attr.x1]="17 + number * 1"
                        y1="8"
                        [attr.x2]="17 + number * 1"
                        y2="92" style="stroke:rgb(0, 0, 0);stroke-width:0.1" />
                    <line *ngFor="let number of [31,32,33,34,35,36,37,38,39,40]"
                        [attr.x1]="17 + number * 1"
                        y1="8"
                        [attr.x2]="17 + number * 1"
                        y2="92" style="stroke:rgb(0, 0, 0);stroke-width:0.1" />
                    <line *ngFor="let number of [41,42,43,44,45,46,47,48,49,50]"
                        [attr.x1]="17 + number * 1"
                        y1="8"
                        [attr.x2]="17 + number * 1"
                        y2="92" style="stroke:rgb(0, 0, 0);stroke-width:0.1" />
                    <line *ngFor="let number of [51,52,53,54,55,56,57,58,59,60]"
                        [attr.x1]="17 + number * 1"
                        y1="8"
                        [attr.x2]="17 + number * 1"
                        y2="92" style="stroke:rgb(0, 0, 0);stroke-width:0.1" />
                    <line *ngFor="let number of [61,62,63,64,65]"
                        [attr.x1]="17 + number * 1"
                        y1="8"
                        [attr.x2]="17 + number * 1"
                        y2="92" style="stroke:rgb(0, 0, 0);stroke-width:0.1" />

                    <circle cx="50" cy="50" r="2" stroke="green" stroke-width="0.5"  />

                    <g id="hands">
                        <line [attr.transform] = "'rotate(' + (clock | async | dateHand:'H') + ' 50 50)'" id="min" x1="50" y1="50.5" x2="50" y2="34" style="stroke:rgb(0, 0, 0);stroke-width:1.5"/>
                        <line [attr.transform] = "'rotate(' + (clock | async | dateHand:'m') + ' 50 50)'" id="min" x1="50" y1="50" x2="50" y2="24" style="stroke:rgb(0, 0, 0);stroke-width:1"/>
                        <line [attr.transform] = "'rotate(' + (clock | async | dateHand:'s') + ' 50 50)'" id="sec" x1="50" y1="50" x2="50" y2="20" style="stroke:rgb(0, 0, 0);stroke-width:0.5"/>
                    </g>

                </svg>
            </div>
                `,
styles: [`
        #clock {
        }
        #face {
            stroke-width: 2px; stroke: #fff;
        }
        #hour, #min, #sec {
            stroke-width: 1px; fill: #333; stroke: #555;
        }
        #sec { stroke: #f55; }
        #min { stroke: #050; }
        `
        ]
})
export class AnalogClockComponent {

    clock:any;

    constructor() {

       this.clock =  Observable
            .interval(1000)
            .map(()=> {
                let date = new Date();
                return date;
            });
    }
}