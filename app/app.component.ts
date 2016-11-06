import { Component } from '@angular/core';
import {AngularService} from './service';
@Component({
  selector: '.my-app',
  template: `1+2 =  (( '{{1+ 2}}' )) | 1+2 = ((result))`,
  interpolation: ['((', '))'],
  providers: [AngularService]
})
export class AppComponent { 
  result: Number;
  constructor(private angularService: AngularService) {

    this.result = angularService.Add(1, 2);
  }
}

