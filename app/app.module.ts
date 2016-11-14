import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DigitalClockComponent }   from './digital-clock.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, DigitalClockComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }

