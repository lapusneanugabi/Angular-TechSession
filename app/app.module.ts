import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DigitalClockComponent }   from './digital-clock.component';
import { AnalogClockComponent }   from './analog-clock.component';


import {HighlightDirective} from './highlight.directive';

import {dateHandPipe} from './date-hand.pipe';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, 
                    DigitalClockComponent, AnalogClockComponent, 
                    HighlightDirective, 
                    dateHandPipe],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }

