import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DigitalClockComponent }   from './digital-clock.component';
import {HighlightDirective} from './highlight.directive';


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, DigitalClockComponent, HighlightDirective],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }

