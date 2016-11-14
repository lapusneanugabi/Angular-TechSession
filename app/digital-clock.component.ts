import  {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'digital-clock',
    template:  `{{clock | async | date:'medium'}}`
})
export class DigitalClockComponent {
    clock: any;
    constructor() {
        
        this.clock = Observable
            .interval(1000)
            .map(()=> new Date());
    }
}