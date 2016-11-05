import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `1+2 =  (( '{{1+ 2}}' )) | 1+2 = ((1+2))`,
  interpolation: ['((', '))']
})
export class AppComponent { }

