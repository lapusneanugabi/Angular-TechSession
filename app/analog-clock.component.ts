import  {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'analog-clock',
    template:  `
            <div class="background-clock1"> 
                <svg id="clock" viewBox="0 0 300 300">
                    <g id="hands">
                        <rect [attr.transform] = "'rotate(' + (clock | async | dateHand:'H')  + ' 50 50)'" id="hour" x="48.5" y="12.5" width="5" height="40" rx="2.5" ry="2.55" />
                        <rect [attr.transform] = "'rotate(' + (clock | async | dateHand:'m') + ' 50 50)'" id="min" x="48" y="12.5" width="3" height="40" rx="2" ry="2"/>
                        <line [attr.transform] = "'rotate(' + (clock | async | dateHand:'s') + ' 50 50)'" id="sec" x1="50" y1="50" x2="50" y2="16" />
                    </g>
                </svg>
            </div>
                `,
styles: [`
        .background-clock {
            background-repeat: no-repeat;
            background-image: url("clock.jpg");
            height: 533px;
          
        }
        #clock {
            background-repeat: no-repeat;
            background-image: url("clock.jpg");
            position: absolute;
            top: 299px;
            left: 140;
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