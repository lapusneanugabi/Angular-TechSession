import { Component } from '@angular/core';
import {AngularService} from './service';
@Component({
  selector: '.my-app',
  template: `1+2 =  (( '{{1+ 2}}' )) | 1+2 = ((1+2))`,
  interpolation: ['((', '))'],
  providers: [AngularService]
})
export class AppComponent { 
  constructor(private anngularService: AngularService) {
  }
}

